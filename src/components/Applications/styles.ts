import styled from 'styled-components'

export const Container = styled.div`
	grid-area: 1 / 1 / 2 / 7;
	background: ${({ theme }) => theme.colors.backgrounds.white};
	border-radius: ${({ theme }) => theme.borderRadius}px;
	overflow: auto;
`

export const Header = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	padding-inline: ${({ theme }) => theme.gridUnit * 5}px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.backgrounds.master};
	justify-content: space-between;
	gap: 20px;
`

export const ApplicationsCount = styled.span`
	margin-left: ${({ theme }) => theme.gridUnit * 2}px;
	font-size: ${({ theme }) => theme.fonts.size.l}px;
`
export const Title = styled.h1`
	flex: 1;
	font-size: ${({ theme }) => theme.fonts.size.m}px;
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
`

export const Cell = styled.p`
	text-align: center;
`

export const Table = styled.table`
	width: 100%;
	color: ${({ theme }) => theme.colors.fonts.dark};
	border-collapse: collapse;
	tbody {
		tr {
			&:last-child > td {
				border-bottom: none;
			}
		}
	}
`

export const TableHeader = styled.th`
	padding-block: ${({ theme }) => theme.gridUnit * 3}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
	border-bottom: 1px solid ${({ theme }) => theme.colors.backgrounds.master};
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.colors.backgrounds.white};
`

export const TableData = styled.td`
	padding-block: ${({ theme }) => theme.gridUnit * 3}px;
	font-size: ${({ theme }) => theme.fonts.size.xs}px;
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
	border-bottom: 1px solid ${({ theme }) => theme.colors.backgrounds.master};
	text-align: center;
`

export const TableWrapper = styled.div`
	padding-inline: ${({ theme }) => theme.gridUnit * 5}px;
	overflow: auto;
	height: 240px;
`
