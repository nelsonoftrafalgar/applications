import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import {Section, Title} from '../../styles'
import { getDateChartData, getDateValues, getDatesRange } from '../../helpers/statistics'

import { ADD_STATISTICS_DATE } from '../../state/actions'
import { DateWidget } from '../../components/Widgets'
import { MainContext } from '../../context/context'
import { getStatisticsData } from '../../services/RESTClient'

const Date = () => {
  const {dispatch, state: {statistics: {date}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const payload  = await getStatisticsData('date')
      dispatch({type: ADD_STATISTICS_DATE, payload})
    })()
  }, [])

  const range = getDatesRange()
  const values = getDateValues(date, 'application_date')
  const chartData = getDateChartData(range, values)

  return (
    <Section scrollOverflow={true}>
      <Title>Date</Title>
      <Row mt={'20'}>
        <Col size={12}>
          <DateWidget data={chartData}/>
        </Col>
      </Row>
    </Section>
  )
}

export {Date}
