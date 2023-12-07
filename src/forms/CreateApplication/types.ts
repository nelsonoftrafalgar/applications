import { StatusType } from 'store/applications/types'

export interface CreateApplicationFormData {
	company: string
	min_salary: number
	max_salary: number
	applied: string
	status: StatusType
}

export interface CreateApplicationProps {
	handleModalClose: () => void
}
