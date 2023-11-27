import { StyledProps } from './types'
import styled from 'styled-components'

export const StatusStyled = styled.span<StyledProps>`
	padding: 4px 8px;
	color: ${({ theme, $status }) => {
		switch ($status) {
			case 'not interested':
				return theme.colors.primary.orange
			case 'no answer':
				return theme.colors.primary.blue
			case 'successfull interview':
				return theme.colors.primary.green
			case 'bad agreement':
				return theme.colors.primary.red
			case 'failed interview':
				return theme.colors.primary.navy
			case 'hire':
				return theme.colors.primary.violet
		}
	}};

	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	gap: ${({ theme }) => theme.gridUnit}px;
	background-color: ${({ theme, $status }) => {
		switch ($status) {
			case 'not interested':
				return theme.colors.statusBg.notInterested
			case 'no answer':
				return theme.colors.statusBg.noAnswer
			case 'successfull interview':
				return theme.colors.statusBg.successfullInterview
			case 'bad agreement':
				return theme.colors.statusBg.badAgreement
			case 'failed interview':
				return theme.colors.statusBg.failedInterview
			case 'hire':
				return theme.colors.statusBg.hire
		}
	}};
`
