import { BadCompany } from '../../store/badCompanies/types'
import { Cell } from './styles'
import { DeleteBadCompanyModal } from '../../modals/DeleteBadCompanyModal'
import { EditBadCompanyModal } from '../../modals/EditBadCompanyModal'
import { createColumnHelper } from '@tanstack/react-table'

export const getBadCompaniesTableColumns = () => {
	const columnHelper = createColumnHelper<BadCompany>()

	return [
		columnHelper.accessor((row) => row.bad_company, {
			id: 'bad_company',
			cell: (info) => <Cell>{info.getValue()}</Cell>
		}),

		columnHelper.display({
			id: 'edit',
			cell: ({ row }) => {
				return <EditBadCompanyModal {...row.original} />
			}
		}),
		columnHelper.display({
			id: 'delete',
			cell: ({ row }) => {
				return <DeleteBadCompanyModal id={row.original.id} />
			}
		})
	]
}
