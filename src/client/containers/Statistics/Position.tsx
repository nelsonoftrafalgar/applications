import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import {Section, Title} from '../../styles'

import { ADD_STATISTICS_POSITION } from '../../state/actions'
import { MainContext } from '../../context/context'
import {PercentWidget} from '../../components/Widgets'
import { getStatisticsData } from '../../services/RESTClient'

const Position = () => {
  const {dispatch, state: {statistics: {position}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const payload = await getStatisticsData('position')
      dispatch({type: ADD_STATISTICS_POSITION, payload})
    })()
  }, [])

  return (
    <Section>
      <Title>Position</Title>
      <Row mt={'20'} expand={true}>
        <Col size={6}>
          <PercentWidget state={position} dimension='position_name'/>
        </Col>
      </Row>
    </Section>
  )
}

export {Position}
