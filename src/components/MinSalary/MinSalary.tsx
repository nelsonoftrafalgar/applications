import { Container, Header, Title } from './styles'

import { ApiLoader } from '../../ui/loader/ApiLoader'
import { MinSalaryChart } from './MinSalaryChart'
import { applicationsGroupBy } from '../Status/utils'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const MinSalary = () => {
	const { data, isLoading } = useGetApplicationsQuery()

	const applicationsGroupedByMinSalary = applicationsGroupBy(data, 'min_salary')

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Min Salary</Title>
				</Header>
				<MinSalaryChart data={applicationsGroupedByMinSalary} />
			</ApiLoader>
		</Container>
	)
}
