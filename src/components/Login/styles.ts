import { styled } from 'styled-components'

export const MasterWrapper = styled.div`
	background: ${({ theme }) => theme.colors.backgrounds.master};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LoginContainer = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius}px;
	background: ${({ theme }) => theme.colors.backgrounds.container};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
`
