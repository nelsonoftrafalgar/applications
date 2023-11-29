import { Application } from '../store/applications/types'
import { DeleteApplication } from '../forms/DeleteApplication/DeleteApplication'
import { MenuItem } from '../components/ApplicationMenu/styles'
import { Modal } from '../ui/modal/Modal'
import { useState } from 'react'

export const DeleteApplicationModal = ({ id }: Pick<Application, 'id'>) => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Delete application'
			content={<DeleteApplication handleModalClose={handleModalClose} id={id} />}
		>
			<span>
				<MenuItem onClick={handleModalOpen}>Delete</MenuItem>
			</span>
		</Modal>
	)
}
