import { Button } from '@radix-ui/themes'
import { StyledButtonProps } from './types'
import styled from 'styled-components'

export const StyledButton = styled(Button)<StyledButtonProps>`
	background-color: ${({ theme, $type }) =>
		$type === 'orange' && theme.colors.primary.orange};
	background-color: ${({ theme, $type }) =>
		$type === 'red' && theme.colors.primary.red};
	background-color: ${({ theme, $type }) =>
		$type === 'green' && theme.colors.primary.green};
	background-color: ${({ theme, $type }) =>
		$type === 'navy' && theme.colors.primary.navy};
	padding-block: ${({ theme }) => theme.gridUnit * 3}px;
	padding-inline: ${({ theme }) => theme.gridUnit * 5}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	color: ${({ theme }) => theme.colors.fonts.white};
	border-radius: ${({ theme }) => theme.borderRadius}px;
	white-space: nowrap;
	cursor: pointer;
	&:hover:not(:disabled) {
		opacity: 0.7;
	}
	transition: opacity 0.3s;
	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
	display: flex;
	align-items: center;
	justify-content: center;

	&:active:not(:disabled) {
		filter: saturate(270%);
	}
`
