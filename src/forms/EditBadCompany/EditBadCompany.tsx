import { EditBadCompanyFormData, EditBadCompanyProps } from './types'
import { Form, FormButtons } from '../../ui/form/styles'
import { Resolver, useForm } from 'react-hook-form'

import { Button } from '../../ui/button/Button'
import { FC } from 'react'
import { FormInput } from '../fields/FormInput'
import { badCompanySchema } from '../validation'
import { useEditBadComapnyMutation } from '../../store/badCompanies/bandCompanies'
import { yupResolver } from '@hookform/resolvers/yup'

export const EditBadCompany: FC<EditBadCompanyProps> = ({
	id,
	bad_company,
	handleModalClose
}) => {
	const {
		formState: { isSubmitting },
		control,
		handleSubmit
	} = useForm<EditBadCompanyFormData>({
		resolver: yupResolver(badCompanySchema) as Resolver<EditBadCompanyFormData>,
		defaultValues: { bad_company }
	})

	const [editBadCompany] = useEditBadComapnyMutation()

	const onSubmit = async (data: EditBadCompanyFormData) => {
		await editBadCompany({ id, ...data })
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
					Save
				</Button>
			</FormButtons>
		</Form>
	)
}
