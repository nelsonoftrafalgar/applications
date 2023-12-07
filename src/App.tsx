import { Applications } from 'components/Applications/Applications'
import { BadCompanies } from 'components/BadCompanies/BadCompanies'
import { MaxSalary } from 'components/MaxSalary/MaxSalary'
import { MinSalary } from 'components/MinSalary/MinSalary'
import { Status } from 'components/Status/Status'
import { TimeLine } from 'components/Timeline/TimeLine'
import styled from 'styled-components'

const MasterWrapper = styled.div`
	background: ${({ theme }) => theme.colors.backgrounds.master};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	height: 100vh;
`

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

export const App = () => {
	return (
		<MasterWrapper>
			<Container>
				<Applications />
				<BadCompanies />
				<Status />
				<MinSalary />
				<MaxSalary />
				<TimeLine />
			</Container>
		</MasterWrapper>
	)
}
