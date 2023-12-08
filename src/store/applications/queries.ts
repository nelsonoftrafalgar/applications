import { CreateApplicationParams, EditApplicationParams } from './types'

export const ApplicationQueries = {
	getApplications: () => ({
		url: 'applications?select=*&order=applied.desc',
		method: 'GET'
	}),
	createApplication: (body: CreateApplicationParams) => ({
		url: 'applications',
		method: 'POST',
		body
	}),
	editApplication: (body: EditApplicationParams) => ({
		url: `applications?id=eq.${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteApplication: (id: string) => ({
		url: `applications?id=eq.${id}`,
		method: 'DELETE'
	})
}
