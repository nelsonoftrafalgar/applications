import { Container, Header, Title } from './styles'

import { MinSalaryChart } from './MinSalaryChart'
import { applicationsGroupBy } from '../Status/utils'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const MinSalary = () => {
	const { data } = useGetApplicationsQuery()

	const applicationsGroupedByMinSalary = applicationsGroupBy(data, 'min_salary')

	return (
		<Container>
			<Header>
				<Title>Min Salary</Title>
			</Header>
			<MinSalaryChart data={applicationsGroupedByMinSalary} />
		</Container>
	)
}
