import { Application } from '../store/applications/types'
import { DeleteApplication } from '../forms/DeleteApplication/DeleteApplication'
import { MenuItem } from '../components/ApplicationMenu/styles'
import { Modal } from '../ui/modal/Modal'
import { usePopoverContext } from '../ui/popover/context'
import { useState } from 'react'

export const DeleteApplicationModal = ({ id }: Pick<Application, 'id'>) => {
	const [open, setOpen] = useState(false)
	const { setPopoverOpen } = usePopoverContext()

	const handleModalOpenState = (open: boolean) => {
		if (!open) {
			setPopoverOpen(open)
			setOpen(open)
		} else {
			setOpen(open)
		}
	}
	return (
		<Modal
			open={open}
			onOpenChange={handleModalOpenState}
			title='Delete application'
			content={
				<DeleteApplication handleModalOpenState={handleModalOpenState} id={id} />
			}
		>
			<span>
				<MenuItem onClick={() => handleModalOpenState(true)}>Delete</MenuItem>
			</span>
		</Modal>
	)
}
