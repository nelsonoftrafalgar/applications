import { CreateBadCompanyFormData, CreateBadCompanyProps } from './types'
import { Form, FormButtons } from '../../ui/form/styles'
import { Resolver, useForm } from 'react-hook-form'

import { Button } from '../../ui/button/Button'
import { ButtonLoader } from '../../ui/loader/ButtonLoader'
import { FC } from 'react'
import { FormInput } from '../fields/FormInput'
import { badCompanySchema } from '../validation'
import { useCreateBadCompanyMutation } from '../../store/badCompanies/badCompanies'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateBadCompany: FC<CreateBadCompanyProps> = ({
	handleModalClose
}) => {
	const { control, handleSubmit } = useForm<CreateBadCompanyFormData>({
		resolver: yupResolver(badCompanySchema) as Resolver<CreateBadCompanyFormData>
	})

	const [createBadCompany, { isLoading }] = useCreateBadCompanyMutation()

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
				<ButtonLoader isLoading={isLoading}>
					<Button buttonStyle='green'>Add</Button>
				</ButtonLoader>
			</FormButtons>
		</Form>
	)
}
