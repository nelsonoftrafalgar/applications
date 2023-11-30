import {
	Application,
	CreateApplicationParams,
	EditApplicationParams
} from './types'
import {
	invalidateApplications,
	optimisticDeleteApplication,
	optimisticUpdateApplication
} from './optimisticUpdates'

import { ApplicationQueries } from './queries'
import { api } from '../api'

export const applicationsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getApplications: builder.query<Application[], void>({
			query: ApplicationQueries.getApplications,
			providesTags: ['Applications']
		}),
		createApplication: builder.mutation<Application, CreateApplicationParams>({
			query: ApplicationQueries.createApplication,
			invalidatesTags: ['Applications']
		}),
		editApplication: builder.mutation<Application, EditApplicationParams>({
			query: ApplicationQueries.editApplication,
			async onQueryStarted(application, { dispatch, queryFulfilled }) {
				dispatch(optimisticUpdateApplication(application))
				try {
					await queryFulfilled
				} catch {
					dispatch(invalidateApplications())
				}
			}
		}),
		deleteApplication: builder.mutation<void, string>({
			query: ApplicationQueries.deleteApplication,
			async onQueryStarted(applicationId, { dispatch, queryFulfilled }) {
				dispatch(optimisticDeleteApplication(applicationId))
				try {
					await queryFulfilled
				} catch {
					dispatch(invalidateApplications())
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
