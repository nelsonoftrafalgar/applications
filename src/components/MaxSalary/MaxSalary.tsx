import { Container, Header, Title } from './styles'

import { MaxSalaryChart } from './MaxSalaryChart'
import { applicationsGroupBy } from '../Status/utils'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const MaxSalary = () => {
	const { data } = useGetApplicationsQuery()

	const applicationsGroupedByMaxSalary = applicationsGroupBy(data, 'max_salary')

	return (
		<Container>
			<Header>
				<Title>Max Salary</Title>
			</Header>
			<MaxSalaryChart data={applicationsGroupedByMaxSalary} />
		</Container>
	)
}
