import { CreateApplicationFormData, CreateApplicationProps } from './types'
import { Form, FormButtons, FormInputGroup } from '../../ui/form/styles'
import { generateSalaryOptions, statusOptions } from '../utils'

import { Button } from '../../ui/button/Button'
import { FC } from 'react'
import { FormDatePicker } from '../fields/FormDatePicker'
import { FormInput } from '../fields/FormInput'
import { FormSelect } from '../fields/FormSelect'
import { getApplicationSchema } from '../validation'
import { useCreateApplicationMutation } from '../../store/applications'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateApplication: FC<CreateApplicationProps> = ({
	handleModalClose
}) => {
	const {
		formState: { isSubmitting },
		control,
		handleSubmit
	} = useForm<CreateApplicationFormData>({
		resolver: yupResolver(getApplicationSchema())
	})

	const [createApplication] = useCreateApplicationMutation()

	const onSubmit = async (data: CreateApplicationFormData) => {
		await createApplication(data)
		handleModalClose()
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
				<Button onClick={handleModalClose} buttonStyle='navy'>
					Cancel
				</Button>
				<Button disabled={isSubmitting} buttonStyle='green'>
					Add
				</Button>
			</FormButtons>
		</Form>
	)
}
