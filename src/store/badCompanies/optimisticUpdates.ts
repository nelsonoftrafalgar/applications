import { BadCompany } from './types'
import { badCompaniesApi } from './badCompanies'

export const optimisticUpdateBadCompany = (bad_company: BadCompany) =>
	badCompaniesApi.util.updateQueryData('getBadCompanies', undefined, (draft) => {
		const index = draft.findIndex(({ id }) => id === bad_company.id)
		draft[index] = bad_company
	})

export const invalidateBadCompanies = () =>
	badCompaniesApi.util.invalidateTags(['BadCompanies'])

export const optimisticDeleteBadCompany = (badCompanyId: string) =>
	badCompaniesApi.util.updateQueryData('getBadCompanies', undefined, (draft) => {
		const index = draft.findIndex(({ id }) => id === badCompanyId)
		draft.splice(index, 1)
	})
