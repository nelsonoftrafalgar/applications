import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface Props {
	children: ReactNode
	content: ReactNode
}

export interface IPopoverContext {
	setPopoverOpen: Dispatch<SetStateAction<boolean>>
}
