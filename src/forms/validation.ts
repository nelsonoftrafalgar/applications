import * as yup from 'yup'

export const applicationSchema = yup
	.object({
		company: yup
			.string()
			.max(250)
			.matches(/^[A-Za-z0-9-\s]+$/, {
				excludeEmptyString: true,
				message: 'Invalid characters'
			})
			.required('This field is required'),
		max_salary: yup.number().required('This field is required'),
		min_salary: yup.number().required('This field is required'),
		applied: yup.string().required('This field is required'),
		status: yup.string().required('This field is required')
	})
	.required()
