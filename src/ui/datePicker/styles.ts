import styled, { css } from 'styled-components'

import { Label } from '@radix-ui/react-label'

export const DatePickerWrapper = styled.div<{ $error?: boolean }>`
	margin-bottom: ${({ $error }) => ($error ? 0 : 25)}px;
	display: flex;
	gap: ${({ theme }) => theme.gridUnit}px;
	align-items: center;

	.react-datepicker__triangle {
		display: none;
	}
	.react-datepicker {
		border-radius: ${({ theme }) => theme.borderRadius}px;
	}
	.react-datepicker__header {
		border-top-right-radius: ${({ theme }) => theme.borderRadius}px;
		border-top-left-radius: ${({ theme }) => theme.borderRadius}px;
		background-color: ${({ theme }) => theme.colors.backgrounds.input};
	}
	.react-datepicker__navigation-icon::before {
		border-color: ${({ theme }) => theme.colors.primary.navy};
	}
	.react-datepicker__current-month {
		font-size: ${({ theme }) => theme.fonts.size.xs}px;
	}
	.react-datepicker__day-name {
		font-size: ${({ theme }) => theme.fonts.size.xs}px;
	}
	.react-datepicker__day {
		border-radius: 0;
	}
	.react-datepicker__day--in-selecting-range {
		background-color: ${({ theme }) => theme.colors.borders.dark};
	}
	.react-datepicker__day--selected {
		background-color: ${({ theme }) => theme.colors.borders.dark};
	}
	input {
		background-color: ${({ theme }) => theme.colors.backgrounds.input};
		padding: ${({ theme }) => theme.gridUnit * 2.5}px;
		border-radius: ${({ theme }) => theme.borderRadius}px;
		outline: none;
		width: 170px;

		&::placeholder {
			color: ${({ theme }) => theme.colors.fonts.light};
		}

		${({ theme, $error }) =>
			$error &&
			css`
				border: 1px solid ${theme.colors.primary.red};
			`}
	}
`
export const StyledLabel = styled(Label)`
	color: ${({ theme }) => theme.colors.primary.navy};
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	display: flex;
	gap: 140px;
	margin-bottom: ${({ theme }) => theme.gridUnit * 2.5}px;
`

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.colors.primary.red};
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	margin-left: ${({ theme }) => theme.gridUnit * 3}px;
	display: inline-block;
	margin-top: ${({ theme }) => theme.gridUnit * 2.5}px;
`
