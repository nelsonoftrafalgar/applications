import { Application } from './types'
import { applicationsApi } from './applications'

export const optimisticUpdateApplication = (application: Application) =>
	applicationsApi.util.updateQueryData('getApplications', undefined, (draft) => {
		const index = draft.findIndex(({ id }) => id === application.id)
		draft[index] = application
	})

export const invalidateApplications = () =>
	applicationsApi.util.invalidateTags(['Applications'])

export const optimisticDeleteApplication = (applicationId: string) =>
	applicationsApi.util.updateQueryData('getApplications', undefined, (draft) => {
		const index = draft.findIndex(({ id }) => id === applicationId)
		draft.splice(index, 1)
	})
