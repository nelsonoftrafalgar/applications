import { BadCompany } from 'store/badCompanies/types'
import { EditBadCompany } from 'forms/EditBadCompany/EditBadCompany'
import { Modal } from 'ui/modal/Modal'
import { ModalTrigger } from './styles'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

export const EditBadCompanyModal = (props: BadCompany) => {
	const [open, setOpen] = useState(false)

	const handleModalClose = () => setOpen(false)
	const handleModalOpen = () => setOpen(true)
	return (
		<Modal
			open={open}
			onOpenChange={setOpen}
			title='Edit bad company'
			content={<EditBadCompany handleModalClose={handleModalClose} {...props} />}
		>
			<ModalTrigger>
				<Pencil2Icon onClick={handleModalOpen} />
			</ModalTrigger>
		</Modal>
	)
}
