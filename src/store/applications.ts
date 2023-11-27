import { Application } from './types'
import { api } from './api'

const applicationsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getApplications: builder.query<Application[], void>({
			query: () => ({
				url: 'applications',
				method: 'GET'
			}),
			providesTags: ['Applications']
		})
	})
})

export const { useGetApplicationsQuery } = applicationsApi
