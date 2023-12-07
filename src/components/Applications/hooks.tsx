import { ChangeEvent, useState } from 'react'
import {
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable
} from '@tanstack/react-table'

import { getApplicationTableColumns } from './utils'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const useApplications = () => {
	const [search, setSearch] = useState('')

	const { data = [], isLoading } = useGetApplicationsQuery()
	const table = useReactTable({
		data,
		columns: getApplicationTableColumns(),
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			globalFilter: search
		},
		onGlobalFilterChange: setSearch,
		enableFilters: true
	})

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
		setSearch(event.currentTarget.value)

	const applicationTotalCount = data.length

	return { table, applicationTotalCount, search, handleSearch, isLoading }
}
