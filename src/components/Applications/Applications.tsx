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

import { CreateApplicationModal } from '../../modals/CreateApplicationModal'
import { Input } from '../../ui/input/Input'
import { flexRender } from '@tanstack/react-table'
import { useApplications } from './hooks'

export const Applications = () => {
	const { table, applicationTotalCount, search, handleSearch } =
		useApplications()

	return (
		<Container>
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
				<Table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHeader key={header.id}>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</TableHeader>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableData key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableData>
								))}
							</tr>
						))}
					</tbody>
				</Table>
			</TableWrapper>
		</Container>
	)
}
