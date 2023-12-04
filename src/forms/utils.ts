export const generateSalaryOptions = () =>
	Array.from({ length: 50 }).map((_, index) => ({
		value: index.toString(),
		label: `${index.toString()} k`
	}))

export const statusOptions = [
	{
		value: 'no answer',
		label: 'no answer'
	},
	{
		value: 'not interested',
		label: 'not interested'
	},
	{
		value: 'failed interview',
		label: 'failed interview'
	},
	{
		value: 'successful interview',
		label: 'successful interview'
	},
	{
		value: 'bad agreement',
		label: 'bad agreement'
	},
	{
		value: 'hire',
		label: 'hire'
	}
]
