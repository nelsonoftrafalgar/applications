export type StatusType =
	| 'no answer'
	| 'not interested'
	| 'bad agreement'
	| 'failed interview'
	| 'successfull interview'
	| 'hire'

export interface Application {
	id: string
	company: string
	min_salary: number
	max_salary: number
	status: StatusType
	applied: string
}
