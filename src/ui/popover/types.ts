import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface Props {
	children: ReactNode
	content: ReactNode
}

export interface PopoverContext {
	setPopoverOpen: Dispatch<SetStateAction<boolean>>
}
