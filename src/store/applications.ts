import { Application } from './types'
import { CreateApplicationFormData } from '../forms/CreateApplication/types'
import { api } from './api'

const applicationsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getApplications: builder.query<Application[], void>({
			query: () => ({
				url: 'applications',
				method: 'GET'
			}),
			providesTags: ['Applications']
		}),
		createApplication: builder.mutation<Application, CreateApplicationFormData>({
			query: (body) => {
				return {
					url: 'applications',
					method: 'POST',
					body
				}
			},
			invalidatesTags: ['Applications']
		})
	})
})

export const { useGetApplicationsQuery, useCreateApplicationMutation } =
	applicationsApi
