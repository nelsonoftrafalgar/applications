export const generateMockApplications = (count: number) =>
	Array.from({ length: count }).map((_, id) => ({
		id: id.toString(),
		company: `test company ${id}`,
		min_salary: (id + 1) * 10,
		max_salary: (id + 2) * 10,
		status: 'no answer',
		applied: '2020-11-11'
	}))

export const generateMockBadCompanies = (count: number) =>
	Array.from({ length: count }).map((_, id) => ({
		id: id.toString(),
		bad_company: `test bad company ${id}`
	}))
