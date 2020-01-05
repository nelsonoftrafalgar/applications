import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import { getDateChartData, getDateValues, getDatesRange } from '../../helpers/statistics'

import { ADD_STATISTICS_DATE } from '../../state/actions'
import { DateWidget } from '../../components/Widgets'
import { MainContext } from '../../context/context'
import { getStatisticsData } from '../../services/RESTClient'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {basic_font_family, basic_font_color} = globalStyles

const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
`

const Title = styled.h2`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
`

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
    <Container>
      <Title>Date</Title>
      <Row mt={'20'}>
        <Col size={12}>
          <DateWidget data={chartData}/>
        </Col>
      </Row>
    </Container>
  )
}

export {Date}
