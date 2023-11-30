import { Button } from '../../ui/button/Button'
import { ButtonWrapper } from './styles'
import { DeleteBadCompanyProps } from './types'
import { useDeleteBadComapnyMutation } from '../../store/badCompanies/bandCompanies'

export const DeleteBadCompany = ({
	id,
	handleModalClose
}: DeleteBadCompanyProps) => {
	const [deleteBadCompany] = useDeleteBadComapnyMutation()

	const handleDelteBadCompany = () => deleteBadCompany(id)

	return (
		<ButtonWrapper>
			<Button onClick={handleModalClose} buttonStyle='navy'>
				Cancel
			</Button>
			<Button onClick={handleDelteBadCompany} buttonStyle='red'>
				Delete
			</Button>
		</ButtonWrapper>
	)
}
