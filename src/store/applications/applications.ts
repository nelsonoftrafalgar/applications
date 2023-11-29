import {
	Application,
	CreateApplicationParams,
	EditApplicationParams
} from './types'

import { api } from '../api'

const applicationsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getApplications: builder.query<Application[], void>({
			query: () => ({
				url: 'applications',
				method: 'GET'
			}),
			providesTags: ['Applications']
		}),
		createApplication: builder.mutation<Application, CreateApplicationParams>({
			query: (body) => ({
				url: 'applications',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Applications']
		}),
		editApplication: builder.mutation<Application, EditApplicationParams>({
			query: (body) => ({
				url: `applications/${body.id}`,
				method: 'PATCH',
				body
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				dispatch(
					applicationsApi.util.updateQueryData(
						'getApplications',
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
					dispatch(applicationsApi.util.invalidateTags(['Applications']))
				}
			}
		}),
		deleteApplication: builder.mutation<void, string>({
			query: (id) => ({
				url: `applications/${id}`,
				method: 'DELETE'
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				dispatch(
					applicationsApi.util.updateQueryData(
						'getApplications',
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
					dispatch(applicationsApi.util.invalidateTags(['Applications']))
				}
			}
		})
	})
})

export const {
	useGetApplicationsQuery,
	useCreateApplicationMutation,
	useEditApplicationMutation,
	useDeleteApplicationMutation
} = applicationsApi
