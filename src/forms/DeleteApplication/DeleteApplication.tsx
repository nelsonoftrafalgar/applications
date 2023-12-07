import { Button } from 'ui/button/Button'
import { ButtonWrapper } from './styles'
import { DeleteApplicationProps } from './types'
import { useDeleteApplicationMutation } from 'store/applications/applications'

export const DeleteApplication = ({
	id,
	handleModalOpenState
}: DeleteApplicationProps) => {
	const [deleteApplication] = useDeleteApplicationMutation()

	const handleDeleteApplication = () => {
		deleteApplication(id)
		handleModalOpenState(false)
	}

	return (
		<ButtonWrapper>
			<Button onClick={() => handleModalOpenState(false)} buttonStyle='navy'>
				Cancel
			</Button>
			<Button onClick={handleDeleteApplication} buttonStyle='red'>
				Delete
			</Button>
		</ButtonWrapper>
	)
}
