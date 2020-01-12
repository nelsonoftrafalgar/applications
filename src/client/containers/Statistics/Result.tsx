import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import {Section, Title} from '../../styles'

import { ADD_STATISTICS_RESULT } from '../../state/actions'
import { MainContext } from '../../context/context'
import {PercentWidget} from '../../components/Widgets'
import { getStatisticsData } from '../../services/RESTClient'

const Result = () => {
  const {dispatch, state: {statistics: {result}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const payload = await getStatisticsData('result')
      dispatch({type: ADD_STATISTICS_RESULT, payload})
    })()
  }, [])

  return (
    <Section>
      <Title>Result</Title>
      <Row mt={'20'} expand={true}>
        <Col size={7}>
          <PercentWidget state={result} dimension='application_result'/>
        </Col>
      </Row>
    </Section>
  )
}

export {Result}
