import { Container, Header, Title } from './styles'

import { ApiLoader } from 'ui/loader/ApiLoader'
import { TimeLineChart } from './TimeLineChart'
import { applicationsGroupBy } from 'components/Status/utils'
import { populateTimeLine } from './utils'
import { useGetApplicationsQuery } from 'store/applications/applications'

export const TimeLine = () => {
	const { data, isLoading } = useGetApplicationsQuery()

	const applicationsGroupedByApplied = applicationsGroupBy(data, 'applied')
	const timeLine = populateTimeLine(applicationsGroupedByApplied)

	return (
		<Container>
			<ApiLoader isLoading={isLoading}>
				<Header>
					<Title>Time Line</Title>
				</Header>
				<TimeLineChart data={timeLine} />
			</ApiLoader>
		</Container>
	)
}
