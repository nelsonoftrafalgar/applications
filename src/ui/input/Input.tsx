import {
	Container,
	ErrorMessage,
	SearchIcon,
	StyledInput,
	StyledLabel
} from './styles'

import { FC } from 'react'
import { InputProps } from './types'

export const Input: FC<InputProps> = ({
	errorMessage,
	label,
	placeholder,
	type = 'text',
	value = '',
	onChange,
	isSearch
}) => {
	return (
		<div>
			{label && <StyledLabel htmlFor={label}>{label}</StyledLabel>}
			<Container $error={!!errorMessage}>
				{isSearch && <SearchIcon height='18' width='18' />}

				<StyledInput
					value={value}
					type={type}
					id={label}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</Container>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	)
}
