import { CreateBadCompanyFormData, CreateBadCompanyProps } from './types'
import { Form, FormButtons } from '../../ui/form/styles'
import { Resolver, useForm } from 'react-hook-form'

import { Button } from '../../ui/button/Button'
import { FC } from 'react'
import { FormInput } from '../fields/FormInput'
import { badCompanySchema } from '../validation'
import { useCreateBadComapnyMutation } from '../../store/badCompanies/badCompanies'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateBadCompany: FC<CreateBadCompanyProps> = ({
	handleModalClose
}) => {
	const {
		formState: { isSubmitting },
		control,
		handleSubmit
	} = useForm<CreateBadCompanyFormData>({
		resolver: yupResolver(badCompanySchema) as Resolver<CreateBadCompanyFormData>
	})

	const [createBadCompany] = useCreateBadComapnyMutation()

	const onSubmit = async (data: CreateBadCompanyFormData) => {
		await createBadCompany(data)
		handleModalClose()
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				placeholder='Bad company'
				label='Bad company'
				name='bad_company'
				control={control}
			/>
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
