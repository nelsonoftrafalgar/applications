import { TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import styled, { css } from 'styled-components'

import { Label } from '@radix-ui/react-label'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { StyledInputProps } from './types'

export const Container = styled(TextFieldRoot)<StyledInputProps>`
	background-color: ${({ theme }) => theme.colors.backgrounds.input};
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.gridUnit * 2.5}px;
	border-radius: ${({ theme }) => theme.borderRadius}px;
	${({ theme, $error }) =>
		$error &&
		css`
			border: 1px solid ${theme.colors.primary.red};
		`}
`

export const SearchIcon = styled(MagnifyingGlassIcon)`
	color: ${({ theme }) => theme.colors.fonts.light};
	margin-right: ${({ theme }) => theme.gridUnit * 2}px;
`

export const StyledInput = styled(TextFieldInput)`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.backgrounds.input};
	border-radius: ${({ theme }) => theme.borderRadius}px;
	&::placeholder {
		color: ${({ theme }) => theme.colors.fonts.light};
	}
	&:focus-visible {
		outline: none;
	}
`

export const StyledLabel = styled(Label)`
	color: ${({ theme }) => theme.colors.fonts.dark};
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	display: block;
	margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
`

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.colors.primary.red};
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	margin-left: ${({ theme }) => theme.gridUnit * 3}px;
	display: inline-block;
	margin-top: ${({ theme }) => theme.gridUnit * 2.5}px;
`
