import {
	BadCompaniesCount,
	Container,
	Footer,
	Header,
	Table,
	TableData,
	TableWrapper,
	Title
} from './styles'

import { CreateBadCompanyModal } from '../../modals/CreateBadCompanyModal'
import { Input } from '../../ui/input/Input'
import { TableVirtuoso } from 'react-virtuoso'
import { flexRender } from '@tanstack/react-table'
import { forwardRef } from 'react'
import { useBadCompanies } from './hooks'

export const BadCompanies = () => {
	const { table, badCompanyTotalCount, search, handleSearch } = useBadCompanies()
	const { rows } = table.getRowModel()

	return (
		<Container>
			<Header>
				<Title>
					Bad companies<BadCompaniesCount>{badCompanyTotalCount}</BadCompaniesCount>
				</Title>
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
			<Footer>
				<Input
					value={search}
					onChange={handleSearch}
					placeholder='Search'
					isSearch
				/>
				<CreateBadCompanyModal />
			</Footer>
		</Container>
	)
}
