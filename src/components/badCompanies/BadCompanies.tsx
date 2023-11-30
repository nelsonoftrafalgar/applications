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
import { flexRender } from '@tanstack/react-table'
import { useBadCompanies } from './hooks'

export const BadCompanies = () => {
	const { table, badCompanyTotalCount, search, handleSearch } = useBadCompanies()

	return (
		<Container>
			<Header>
				<Title>
					Bad companies<BadCompaniesCount>{badCompanyTotalCount}</BadCompaniesCount>
				</Title>
			</Header>
			<TableWrapper>
				<Table>
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
