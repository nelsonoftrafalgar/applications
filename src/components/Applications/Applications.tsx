import {
	ApplicationsCount,
	Cell,
	Container,
	Header,
	Table,
	TableData,
	TableHeader,
	TableWrapper,
	Title
} from './styles'
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table'

import { ApplicationMenu } from '../ApplicationMenu/ApplicationMenu'
import { ApplicationMenuIcon } from '../ApplicationMenu/styles'
import { Button } from '../../ui/button/Button'
import { Input } from '../../ui/input/Input'
import Popover from '../../ui/popover/Popover'
import Status from '../../ui/status/Status'

export type StatusType =
	| 'no answer'
	| 'not interested'
	| 'bad agreement'
	| 'failed interview'
	| 'successfull interview'
	| 'hire'

interface Application {
	id: string
	company: string
	min_salary: number
	max_salary: number
	status: StatusType
	applied: string
}

const data: Application[] = [
	{
		id: '1',
		company: 'Google',
		min_salary: 12,
		max_salary: 22,
		status: 'not interested',
		applied: '11-11-2020'
	},
	{
		id: '2',
		company: 'Facebook',
		min_salary: 12,
		max_salary: 22,
		status: 'no answer',
		applied: '11-11-2020'
	},
	{
		id: '3',
		company: 'Netflix',
		min_salary: 12,
		max_salary: 22,
		status: 'hire',
		applied: '11-11-2020'
	},
	{
		id: '4',
		company: 'Amazon',
		min_salary: 12,
		max_salary: 22,
		status: 'failed interview',
		applied: '11-11-2020'
	},
	{
		id: '5',
		company: 'Apple',
		min_salary: 12,
		max_salary: 22,
		status: 'successfull interview',
		applied: '11-11-2020'
	},
	{
		id: '6',
		company: 'Microsoft',
		min_salary: 12,
		max_salary: 22,
		status: 'bad agreement',
		applied: '11-11-2020'
	},
	{
		id: '7',
		company: 'Twitter',
		min_salary: 12,
		max_salary: 22,
		status: 'bad agreement',
		applied: '11-11-2020'
	}
]

const columnHelper = createColumnHelper<Application>()

const columns = [
	columnHelper.accessor((row) => row.company, {
		id: 'company',
		cell: (info) => <Cell>{info.getValue()}</Cell>,
		header: () => <span>Company</span>
	}),
	columnHelper.accessor((row) => row.min_salary, {
		id: 'min_salary',
		cell: (info) => <Cell>{info.getValue()} k</Cell>,
		header: () => <span>Min salary</span>
	}),
	columnHelper.accessor((row) => row.max_salary, {
		id: 'max_salary',
		cell: (info) => <Cell>{info.getValue()} k</Cell>,
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

export const Applications = () => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<Container>
			<Header>
				<Title>
					Applications<ApplicationsCount>123</ApplicationsCount>
				</Title>
				<Input value='' onChange={() => {}} placeholder='Search' isSearch />
				<Button buttonStyle='navy'>New Application</Button>
			</Header>
			<TableWrapper>
				<Table>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHeader key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
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
