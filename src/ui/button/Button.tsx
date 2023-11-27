import { ButtonProps } from './types'
import { FC } from 'react'
import { StyledButton } from './styles'

export const Button: FC<ButtonProps> = ({
	children,
	buttonStyle,
	disabled,
	...props
}: ButtonProps) => {
	return (
		<StyledButton {...props} disabled={disabled} $type={buttonStyle}>
			{children}
		</StyledButton>
	)
}
