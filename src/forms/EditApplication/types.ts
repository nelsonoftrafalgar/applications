import { Application, StatusType } from '../../store/applications/types'

export interface EditApplicationFormData {
	company: string
	min_salary: number
	max_salary: number
	applied: string
	status: StatusType
}

export interface EditApplicationProps extends Application {
	handleModalClose: () => void
}
