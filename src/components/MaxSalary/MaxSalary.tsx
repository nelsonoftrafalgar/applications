import { Container, Header, Title } from './styles'
import { applicationsGroupBy, omitKey } from 'charts/utils'

import { ApiLoader } from 'ui/loader/ApiLoader'
import { MaxSalaryChart } from './MaxSalaryChart'
import { useGetApplicationsQuery } from 'store/applications/applications'

export const MaxSalary = () => {
	const { data, isLoading } = useGetApplicationsQuery()

	const applicationsGroupedByMaxSalary = applicationsGroupBy(data, 'max_salary')
	const chartData = omitKey(applicationsGroupedByMaxSalary, '0')

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Max Salary</Title>
				</Header>
				<MaxSalaryChart data={chartData} />
			</ApiLoader>
		</Container>
	)
}
