export type StatusType =
	| 'no answer'
	| 'not interested'
	| 'bad agreement'
	| 'failed interview'
	| 'successful interview'
	| 'hire'

export interface Application {
	id: string
	company: string
	min_salary: number
	max_salary: number
	status: StatusType
	applied: string
}

export type EditApplicationParams = Application
export type CreateApplicationParams = Omit<Application, 'id'>
export type DeleteApplicationParams = Pick<Application, 'id'>
