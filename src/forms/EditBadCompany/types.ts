import { BadCompany } from 'store/badCompanies/types'

export interface EditBadCompanyFormData {
	bad_company: string
}

export interface EditBadCompanyProps extends BadCompany {
	handleModalClose: () => void
}
