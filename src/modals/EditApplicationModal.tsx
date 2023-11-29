import { Application } from '../store/applications/types'
import { EditApplication } from '../forms/EditApplication/EditApplication'
import { MenuItem } from '../components/ApplicationMenu/styles'
import { Modal } from '../ui/modal/Modal'
import { useState } from 'react'

export const EditApplicationModal = (props: Application) => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Edit application'
			content={<EditApplication handleModalClose={handleModalClose} {...props} />}
		>
			<span>
				<MenuItem onClick={handleModalOpen}>Edit</MenuItem>
			</span>
		</Modal>
	)
}
