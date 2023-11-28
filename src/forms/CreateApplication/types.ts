export interface CreateApplicationFormData {
	company: string
	min_salary: string
	max_salary: string
	applied: string
	status: string
}

export interface CreateApplicationProps {
	handleModalClose: () => void
}
