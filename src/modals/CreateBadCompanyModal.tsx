import { Button } from '../ui/button/Button'
import { CreateBadCompany } from '../forms/CreateBadCompany/CreateBadCompany'
import { Modal } from '../ui/modal/Modal'
import { useState } from 'react'

export const CreateBadCompanyModal = () => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Add new bad company'
			content={<CreateBadCompany handleModalClose={handleModalClose} />}
		>
			<span>
				<Button onClick={handleModalOpen} buttonStyle='orange'>
					New Company
				</Button>
			</span>
		</Modal>
	)
}
