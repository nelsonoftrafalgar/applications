import { Container, Header, Title } from './styles'
import { applicationsGroupBy, convertToPieChartData } from './utils'

import { ApiLoader } from '../../ui/loader/ApiLoader'
import { StatusChart } from './StatusChart'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const Status = () => {
	const { data, isLoading } = useGetApplicationsQuery()
	const applicationsGroupedByStatus = applicationsGroupBy(data, 'status')
	const pieChartStatusData = convertToPieChartData(applicationsGroupedByStatus)

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Status</Title>
				</Header>
				<StatusChart data={pieChartStatusData} />
			</ApiLoader>
		</Container>
	)
}
