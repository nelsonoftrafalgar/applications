import * as Component from '@radix-ui/react-popover'

import { PopoverContex } from './context'
import { PopoverTriggerStyled } from './styles'
import { Props } from './types'
import { useState } from 'react'

export const Popover = ({ children, content }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<Component.Root open={open} onOpenChange={setOpen}>
			<PopoverTriggerStyled>{children}</PopoverTriggerStyled>
			<Component.Portal>
				<Component.Content>
					<PopoverContex.Provider value={{ setPopoverOpen: setOpen }}>
						{content}
					</PopoverContex.Provider>
				</Component.Content>
			</Component.Portal>
		</Component.Root>
	)
}
