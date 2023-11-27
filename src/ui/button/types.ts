import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonStyle: 'navy' | 'green' | 'orange' | 'red'
	disabled?: boolean
	children: ReactNode
}

export interface StyledButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	$type: 'navy' | 'green' | 'orange' | 'red'
}
