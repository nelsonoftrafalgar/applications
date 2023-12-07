import { CreateApplicationFormData, CreateApplicationProps } from './types'
import { Form, FormButtons, FormInputGroup } from 'ui/form/styles'
import { Resolver, useForm } from 'react-hook-form'
import { generateSalaryOptions, statusOptions } from 'forms/utils'

import { Button } from 'ui/button/Button'
import { ButtonLoader } from 'ui/loader/ButtonLoader'
import { FC } from 'react'
import { FormDatePicker } from 'forms/fields/FormDatePicker'
import { FormInput } from 'forms/fields/FormInput'
import { FormSelect } from 'forms/fields/FormSelect'
import { applicationSchema } from 'forms/validation'
import { useCreateApplicationMutation } from 'store/applications/applications'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateApplication: FC<CreateApplicationProps> = ({
	handleModalClose
}) => {
	const { control, handleSubmit } = useForm<CreateApplicationFormData>({
		resolver: yupResolver(
			applicationSchema
		) as Resolver<CreateApplicationFormData>
	})

	const [createApplication, { isLoading }] = useCreateApplicationMutation()

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
				<ButtonLoader isLoading={isLoading}>
					<Button buttonStyle='green'>Add</Button>
				</ButtonLoader>
			</FormButtons>
		</Form>
	)
}
