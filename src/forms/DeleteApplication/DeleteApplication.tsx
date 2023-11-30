import { Button } from '../../ui/button/Button'
import { ButtonWrapper } from './styles'
import { DeleteApplicationProps } from './types'
import { useDeleteApplicationMutation } from '../../store/applications/applications'

export const DeleteApplication = ({
	id,
	handleModalClose
}: DeleteApplicationProps) => {
	const [deleteApplication] = useDeleteApplicationMutation()

	const handleDelteApplication = () => deleteApplication(id)

	return (
		<ButtonWrapper>
			<Button onClick={handleModalClose} buttonStyle='navy'>
				Cancel
			</Button>
			<Button onClick={handleDelteApplication} buttonStyle='red'>
				Delete
			</Button>
		</ButtonWrapper>
	)
}
