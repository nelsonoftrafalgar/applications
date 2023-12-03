import { Container, Header, Title } from './styles'

import { TimeLineChart } from './TimeLineChart'
import { applicationsGroupBy } from '../Status/utils'
import { populateTimeLine } from './utils'
import { useGetApplicationsQuery } from '../../store/applications/applications'

export const TimeLine = () => {
	const { data } = useGetApplicationsQuery()

	const applicationsGroupedByApplied = applicationsGroupBy(data, 'applied')
	const timeLine = populateTimeLine(applicationsGroupedByApplied)

	return (
		<Container>
			<Header>
				<Title>Time Line</Title>
			</Header>
			<TimeLineChart data={timeLine} />
		</Container>
	)
}
