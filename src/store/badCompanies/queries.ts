import { CreateBadCompanyParams, EditBadCompanyParams } from './types'

export const BadCompanyQueries = {
	getBadCompanies: () => ({
		url: 'bad_companies',
		method: 'GET'
	}),
	createBadCompany: (body: CreateBadCompanyParams) => ({
		url: 'bad_companies',
		method: 'POST',
		body
	}),
	editBadCompany: (body: EditBadCompanyParams) => ({
		url: `bad_companies/${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteBadCompany: (id: string) => ({
		url: `bad_companies/${id}`,
		method: 'DELETE'
	})
}
