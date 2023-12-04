import { EditApplicationFormData, EditApplicationProps } from './types'
import { Form, FormButtons, FormInputGroup } from '../../ui/form/styles'
import { Resolver, useForm } from 'react-hook-form'
import { generateSalaryOptions, statusOptions } from '../utils'

import { Button } from '../../ui/button/Button'
import { FC } from 'react'
import { FormDatePicker } from '../fields/FormDatePicker'
import { FormInput } from '../fields/FormInput'
import { FormSelect } from '../fields/FormSelect'
import { applicationSchema } from '../validation'
import { useEditApplicationMutation } from '../../store/applications/applications'
import { yupResolver } from '@hookform/resolvers/yup'

export const EditApplication: FC<EditApplicationProps> = ({
	handleModalOpenState,
	company,
	applied,
	max_salary,
	min_salary,
	status,
	id
}) => {
	const {
		formState: { isSubmitting },
		control,
		handleSubmit
	} = useForm<EditApplicationFormData>({
		resolver: yupResolver(applicationSchema) as Resolver<EditApplicationFormData>,
		defaultValues: { company, applied, max_salary, min_salary, status }
	})

	const [editApplication] = useEditApplicationMutation()

	const onSubmit = async (data: EditApplicationFormData) => {
		await editApplication({ id, ...data })
		handleModalOpenState(false)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				placeholder='Company'
				label='Company'
				name='company'
				control={control}
			/>
			<FormInputGroup>
				<FormSelect
					name='min_salary'
					control={control}
					placeholder='Min salary'
					label='Min salary'
					options={generateSalaryOptions()}
				/>
				<FormSelect
					name='max_salary'
					control={control}
					placeholder='Max salary'
					label='Max salary'
					options={generateSalaryOptions()}
				/>
			</FormInputGroup>
			<FormInputGroup>
				<FormSelect
					name='status'
					control={control}
					placeholder='Status'
					label='Status'
					options={statusOptions}
				/>

				<FormDatePicker name='applied' control={control} />
			</FormInputGroup>
			<FormButtons>
				<Button onClick={() => handleModalOpenState(false)} buttonStyle='navy'>
					Cancel
				</Button>
				<Button disabled={isSubmitting} buttonStyle='orange'>
					Save
				</Button>
			</FormButtons>
		</Form>
	)
}
