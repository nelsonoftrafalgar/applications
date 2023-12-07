import * as Component from '@radix-ui/react-popover'

import { PopoverContext } from './context'
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
					<PopoverContext.Provider value={{ setPopoverOpen: setOpen }}>
						{content}
					</PopoverContext.Provider>
				</Component.Content>
			</Component.Portal>
		</Component.Root>
	)
}
