import { ChangeEvent, useState } from 'react'
import {
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable
} from '@tanstack/react-table'

import { getBadCompaniesTableColumns } from './utils'
import { useGetBadCompaniesQuery } from 'store/badCompanies/badCompanies'

export const useBadCompanies = () => {
	const [search, setSearch] = useState('')

	const { data = [], isLoading } = useGetBadCompaniesQuery()

	const table = useReactTable({
		data,
		columns: getBadCompaniesTableColumns(),
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

	const badCompanyTotalCount = data.length

	return { table, badCompanyTotalCount, search, handleSearch, isLoading }
}
