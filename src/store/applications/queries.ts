import { CreateApplicationParams, EditApplicationParams } from './types'

export const ApplicationQueries = {
	getApplications: () => ({
		url: 'applications',
		method: 'GET'
	}),
	createApplication: (body: CreateApplicationParams) => ({
		url: 'applications',
		method: 'POST',
		body
	}),
	editApplication: (body: EditApplicationParams) => ({
		url: `applications/${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteApplication: (id: string) => ({
		url: `applications/${id}`,
		method: 'DELETE'
	})
}
