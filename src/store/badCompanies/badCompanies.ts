import {
	BadCompany,
	CreateBadCompanyParams,
	EditBadCompanyParams
} from './types'
import {
	invalidateBadCompanies,
	optimisticDeleteBadCompany,
	optimisticUpdateBadCompany
} from './optimisticUpdates'

import { BadCompanyQueries } from './queries'
import { api } from 'store/api'

export const badCompaniesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getBadCompanies: builder.query<BadCompany[], void>({
			query: BadCompanyQueries.getBadCompanies,
			providesTags: ['BadCompanies']
		}),
		createBadCompany: builder.mutation<BadCompany, CreateBadCompanyParams>({
			query: BadCompanyQueries.createBadCompany,
			invalidatesTags: ['BadCompanies']
		}),
		editBadCompany: builder.mutation<BadCompany, EditBadCompanyParams>({
			query: BadCompanyQueries.editBadCompany,
			async onQueryStarted(badCompany, { dispatch, queryFulfilled }) {
				dispatch(optimisticUpdateBadCompany(badCompany))
				try {
					await queryFulfilled
				} catch {
					dispatch(invalidateBadCompanies())
				}
			}
		}),
		deleteBadCompany: builder.mutation<void, string>({
			query: BadCompanyQueries.deleteBadCompany,
			async onQueryStarted(badCompanyId, { dispatch, queryFulfilled }) {
				dispatch(optimisticDeleteBadCompany(badCompanyId))
				try {
					await queryFulfilled
				} catch {
					dispatch(invalidateBadCompanies())
				}
			}
		})
	})
})

export const {
	useCreateBadCompanyMutation,
	useDeleteBadCompanyMutation,
	useGetBadCompaniesQuery,
	useEditBadCompanyMutation
} = badCompaniesApi
