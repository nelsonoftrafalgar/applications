import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'

export const ApplicationMenuStyled = styled.ul`
	background-color: ${({ theme }) => theme.colors.backgrounds.white};
	padding: ${({ theme }) => theme.gridUnit * 1}px;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	border-radius: 5px;
	list-style-type: none;

	li {
		font-size: ${({ theme }) => theme.fonts.size.xs}px;
		cursor: pointer;
	}
`

export const MenuItem = styled.li`
	padding: ${({ theme }) => theme.gridUnit * 2}px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.backgrounds.container};
	}
`

export const ApplicationMenuIcon = styled(DotsHorizontalIcon)`
	&:hover {
		cursor: pointer;
	}
`
