import { BadCompany } from '../store/badCompanies/types'
import { DeleteBadCompany } from '../forms/DeleteBadCompany/DeleteBadCompany'
import { Modal } from '../ui/modal/Modal'
import { ModalTrigger } from './styles'
import { TrashIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export const DeleteBadCompanyModal = ({ id }: Pick<BadCompany, 'id'>) => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Delete bad company'
			content={<DeleteBadCompany handleModalClose={handleModalClose} id={id} />}
		>
			<ModalTrigger>
				<TrashIcon onClick={handleModalOpen} />
			</ModalTrigger>
		</Modal>
	)
}
