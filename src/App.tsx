import styled from 'styled-components'

const Container = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius}px;
	background: ${({ theme }) => theme.colors.backgrounds.container};
	height: 100%;
	padding: ${({ theme }) => theme.gridUnit * 5}px;

	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 30px;
	grid-row-gap: 30px;
`

const Applications = styled.div`
	grid-area: 1 / 1 / 2 / 7;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`
const BadCompanies = styled.div`
	grid-area: 1 / 7 / 2 / 10;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`
const Results = styled.div`
	grid-area: 1 / 10 / 2 / 13;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`
const Timeline = styled.div`
	grid-area: 2 / 1 / 3 / 5;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`
const MinSalaries = styled.div`
	grid-area: 2 / 5 / 3 / 9;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`
const MaxSalaries = styled.div`
	grid-area: 2 / 9 / 3 / 13;
	background: ${({ theme }) => theme.colors.backgrounds.master};
	border-radius: ${({ theme }) => theme.borderRadius}px;
`

export const App = () => {
	return (
		<Container>
			<Applications>Applications</Applications>
			<BadCompanies>BadCompanies</BadCompanies>
			<Results>Results</Results>
			<Timeline>Timeline</Timeline>
			<MinSalaries>MinSalaries</MinSalaries>
			<MaxSalaries>MaxSalaries</MaxSalaries>
		</Container>
	)
}
