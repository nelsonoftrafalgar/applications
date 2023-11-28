import { Application } from '../../store/types'
import { ApplicationMenu } from '../ApplicationMenu/ApplicationMenu'
import { ApplicationMenuIcon } from '../ApplicationMenu/styles'
import { Cell } from './styles'
import Popover from '../../ui/popover/Popover'
import Status from '../../ui/status/Status'
import { createColumnHelper } from '@tanstack/react-table'

export const getApplicationTableColumns = () => {
	const columnHelper = createColumnHelper<Application>()

	return [
		columnHelper.accessor((row) => row.company, {
			id: 'company',
			cell: (info) => <Cell>{info.getValue()}</Cell>,
			header: () => <span>Company</span>
		}),
		columnHelper.accessor((row) => row.min_salary, {
			id: 'min_salary',
			cell: (info) => <Cell>{info.getValue()}</Cell>,
			header: () => <span>Min salary</span>
		}),
		columnHelper.accessor((row) => row.max_salary, {
			id: 'max_salary',
			cell: (info) => <Cell>{info.getValue()}</Cell>,
			header: () => <span>Max salary</span>
		}),
		columnHelper.accessor((row) => row.status, {
			id: 'status',
			cell: (info) => <Status status={info.getValue()} />,
			header: () => <span>Status</span>
		}),
		columnHelper.accessor((row) => row.applied, {
			id: 'applied',
			cell: (info) => <Cell>{info.getValue()}</Cell>,
			header: () => <span>Applied</span>
		}),
		columnHelper.display({
			id: 'menu',
			cell: () => (
				<Popover content={<ApplicationMenu />}>
					<ApplicationMenuIcon />
				</Popover>
			)
		})
	]
}
