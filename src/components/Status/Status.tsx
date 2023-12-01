import { Container, Header, Title } from './styles'
import { applicationsGroupBy, convertToPieChartData } from './utils'

import { StatusChart } from './StatusChart'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const Status = () => {
	const { data } = useGetApplicationsQuery()
	const applicationsGroupedByStatus = applicationsGroupBy(data, 'status')
	const pieChartStatusData = convertToPieChartData(applicationsGroupedByStatus)

	return (
		<Container>
			<Header>
				<Title>Status</Title>
			</Header>
			<StatusChart data={pieChartStatusData} />
		</Container>
	)
}
