import { Button } from '../ui/button/Button'
import { CreateApplication } from '../forms/CreateApplication/CreateApplication'
import { Modal } from '../ui/modal/Modal'
import { useState } from 'react'

export const CreateApplicationModal = () => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Add new application'
			content={<CreateApplication handleModalClose={handleModalClose} />}
		>
			<span>
				<Button onClick={handleModalOpen} buttonStyle='navy'>
					New Application
				</Button>
			</span>
		</Modal>
	)
}
