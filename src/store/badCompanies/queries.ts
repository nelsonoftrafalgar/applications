import { CreateBadCompanyParams, EditBadCompanyParams } from './types'

export const BadCompanyQueries = {
	getBadCompanies: () => ({
		url: 'rest/v1/bad_companies?select=*&order=bad_company.asc',
		method: 'GET'
	}),
	createBadCompany: (body: CreateBadCompanyParams) => ({
		url: 'rest/v1/bad_companies',
		method: 'POST',
		body
	}),
	editBadCompany: (body: EditBadCompanyParams) => ({
		url: `rest/v1/bad_companies?id=eq.${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteBadCompany: (id: string) => ({
		url: `rest/v1/bad_companies?id=eq.${id}`,
		method: 'DELETE'
	})
}
