import { Container, Header, Title } from './styles'

import { ApiLoader } from 'ui/loader/ApiLoader'
import { MaxSalaryChart } from './MaxSalaryChart'
import { applicationsGroupBy } from 'components/Status/utils'
import { useGetApplicationsQuery } from 'store/applications/applications'

export const MaxSalary = () => {
	const { data, isLoading } = useGetApplicationsQuery()

	const applicationsGroupedByMaxSalary = applicationsGroupBy(data, 'max_salary')

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Max Salary</Title>
				</Header>
				<MaxSalaryChart data={applicationsGroupedByMaxSalary} />
			</ApiLoader>
		</Container>
	)
}
