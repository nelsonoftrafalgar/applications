import {
	ApplicationsCount,
	Container,
	Header,
	Table,
	TableData,
	TableHeader,
	TableWrapper,
	Title
} from './styles'

import { ApiLoader } from '../../ui/loader/ApiLoader'
import { CreateApplicationModal } from '../../modals/CreateApplicationModal'
import { Input } from '../../ui/input/Input'
import { TableVirtuoso } from 'react-virtuoso'
import { flexRender } from '@tanstack/react-table'
import { forwardRef } from 'react'
import { useApplications } from './hooks'

export const Applications = () => {
	const { table, applicationTotalCount, search, handleSearch, isLoading } =
		useApplications()
	const { rows } = table.getRowModel()

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>
						Applications<ApplicationsCount>{applicationTotalCount}</ApplicationsCount>
					</Title>
					<Input
						value={search}
						onChange={handleSearch}
						placeholder='Search'
						isSearch
					/>
					<CreateApplicationModal />
				</Header>
				<TableWrapper>
					<TableVirtuoso
						totalCount={rows.length}
						components={{
							Table: ({ style, ...props }) => {
								return <Table {...props} />
							},
							TableBody: forwardRef(({ style, ...props }, ref) => (
								<tbody {...props} ref={ref} />
							)),
							TableRow: (props) => {
								return table
									.getHeaderGroups()
									.map((headerGroup) => <tr key={headerGroup.id} {...props} />)
							}
						}}
						fixedHeaderContent={() => {
							return table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<TableHeader key={header.id}>
											{flexRender(header.column.columnDef.header, header.getContext())}
										</TableHeader>
									))}
								</tr>
							))
						}}
						itemContent={(index) => {
							const row = rows[index]
							return row
								.getVisibleCells()
								.map((cell) => (
									<TableData key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableData>
								))
						}}
					/>
				</TableWrapper>
			</ApiLoader>
		</Container>
	)
}
