import {
	BadCompany,
	CreateBadCompanyParams,
	EditBadCompanyParams
} from './types'

import { api } from '../api'

const badCompaniesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getBadCompanies: builder.query<BadCompany[], void>({
			query: () => ({
				url: 'bad_companies',
				method: 'GET'
			}),
			providesTags: ['BadCompanies']
		}),
		createBadComapny: builder.mutation<BadCompany, CreateBadCompanyParams>({
			query: (body) => ({
				url: 'bad_companies',
				method: 'POST',
				body
			}),
			invalidatesTags: ['BadCompanies']
		}),
		editBadComapny: builder.mutation<BadCompany, EditBadCompanyParams>({
			query: (body) => ({
				url: `bad_companies/${body.id}`,
				method: 'PATCH',
				body
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				dispatch(
					badCompaniesApi.util.updateQueryData(
						'getBadCompanies',
						undefined,
						(draft) => {
							const index = draft.findIndex(({ id }) => id === arg.id)
							draft[index] = arg
						}
					)
				)
				try {
					await queryFulfilled
				} catch {
					dispatch(badCompaniesApi.util.invalidateTags(['BadCompanies']))
				}
			}
		}),
		deleteBadComapny: builder.mutation<void, string>({
			query: (id) => ({
				url: `bad_companies/${id}`,
				method: 'DELETE'
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				dispatch(
					badCompaniesApi.util.updateQueryData(
						'getBadCompanies',
						undefined,
						(draft) => {
							const index = draft.findIndex(({ id }) => id === arg)
							draft.splice(index, index)
						}
					)
				)
				try {
					await queryFulfilled
				} catch {
					dispatch(badCompaniesApi.util.invalidateTags(['BadCompanies']))
				}
			}
		})
	})
})

export const {
	useCreateBadComapnyMutation,
	useDeleteBadComapnyMutation,
	useGetBadCompaniesQuery,
	useEditBadComapnyMutation
} = badCompaniesApi
