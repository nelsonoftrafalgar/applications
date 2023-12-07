import { Button } from '../../ui/button/Button'
import { ButtonWrapper } from './styles'
import { DeleteBadCompanyProps } from './types'
import { useDeleteBadCompanyMutation } from '../../store/badCompanies/badCompanies'

export const DeleteBadCompany = ({
	id,
	handleModalClose
}: DeleteBadCompanyProps) => {
	const [deleteBadCompany] = useDeleteBadCompanyMutation()

	const handleDeleteBadCompany = () => deleteBadCompany(id)

	return (
		<ButtonWrapper>
			<Button onClick={handleModalClose} buttonStyle='navy'>
				Cancel
			</Button>
			<Button onClick={handleDeleteBadCompany} buttonStyle='red'>
				Delete
			</Button>
		</ButtonWrapper>
	)
}
