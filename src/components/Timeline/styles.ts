import styled from 'styled-components'

export const Container = styled.div`
	grid-area: 2 / 9 / 3 / 13;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`

export const Title = styled.h1`
	flex: 1;
	font-size: ${({ theme }) => theme.fonts.size.m}px;
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
`

export const Header = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	padding-inline: ${({ theme }) => theme.gridUnit * 5}px;
`

export const ChartContainer = styled.div`
	width: 100%;
	height: calc(100% - 60px);
`
