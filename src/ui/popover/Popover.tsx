import * as Component from '@radix-ui/react-popover'

import { PopoverTriggerStyled } from './styles'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	content: ReactNode
}
const Popover = ({ children, content }: Props) => {
	return (
		<Component.Root>
			<PopoverTriggerStyled>{children}</PopoverTriggerStyled>
			<Component.Portal>
				<Component.Content>{content}</Component.Content>
			</Component.Portal>
		</Component.Root>
	)
}

export default Popover
