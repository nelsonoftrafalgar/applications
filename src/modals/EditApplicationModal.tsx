import { Application } from 'store/applications/types'
import { EditApplication } from 'forms/EditApplication/EditApplication'
import { MenuItem } from 'components/ApplicationMenu/styles'
import { Modal } from 'ui/modal/Modal'
import { usePopoverContext } from 'ui/popover/context'
import { useState } from 'react'

export const EditApplicationModal = (props: Application) => {
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
			title='Edit application'
			content={
				<EditApplication handleModalOpenState={handleModalOpenState} {...props} />
			}
		>
			<span>
				<MenuItem onClick={() => handleModalOpenState(true)}>Edit</MenuItem>
			</span>
		</Modal>
	)
}
