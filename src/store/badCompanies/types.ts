export interface BadCompany {
	id: string
	bad_company: string
}

export type EditBadCompanyParams = BadCompany
export type CreateBadCompanyParams = Omit<BadCompany, 'id'>
export type DeleteBadCompanyParams = Pick<BadCompany, 'id'>
