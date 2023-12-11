import { Container, Header, Title } from './styles'
import { applicationsGroupBy, omitKey } from 'charts/utils'

import { ApiLoader } from 'ui/loader/ApiLoader'
import { MinSalaryChart } from './MinSalaryChart'
import { useGetApplicationsQuery } from 'store/applications/applications'

export const MinSalary = () => {
	const { data, isLoading } = useGetApplicationsQuery()

	const applicationsGroupedByMinSalary = applicationsGroupBy(data, 'min_salary')
	const chartData = omitKey(applicationsGroupedByMinSalary, '0')

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Min Salary</Title>
				</Header>
				<MinSalaryChart data={chartData} />
			</ApiLoader>
		</Container>
	)
}
