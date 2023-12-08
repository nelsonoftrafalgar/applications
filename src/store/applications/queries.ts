import { CreateApplicationParams, EditApplicationParams } from './types'

export const ApplicationQueries = {
	getApplications: () => ({
		url: 'rest/v1/applications?select=*&order=applied.desc',
		method: 'GET'
	}),
	createApplication: (body: CreateApplicationParams) => ({
		url: 'rest/v1/applications',
		method: 'POST',
		body
	}),
	editApplication: (body: EditApplicationParams) => ({
		url: `rest/v1/applications?id=eq.${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteApplication: (id: string) => ({
		url: `rest/v1/applications?id=eq.${id}`,
		method: 'DELETE'
	})
}
