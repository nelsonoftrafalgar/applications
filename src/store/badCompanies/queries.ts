import { CreateBadCompanyParams, EditBadCompanyParams } from './types'

export const BadCompanyQueries = {
	getBadCompanies: () => ({
		url: 'bad_companies?select=*&order=bad_company.asc',
		method: 'GET'
	}),
	createBadCompany: (body: CreateBadCompanyParams) => ({
		url: 'bad_companies',
		method: 'POST',
		body
	}),
	editBadCompany: (body: EditBadCompanyParams) => ({
		url: `bad_companies?id=eq.${body.id}`,
		method: 'PATCH',
		body
	}),
	deleteBadCompany: (id: string) => ({
		url: `bad_companies?id=eq.${id}`,
		method: 'DELETE'
	})
}
