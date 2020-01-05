import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'

import { ADD_STATISTICS_RESULT } from '../../state/actions'
import { MainContext } from '../../context/context'
import {PercentWidget} from '../../components/Widgets'
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
`

const Title = styled.h2`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
`

const Result = () => {
  const {dispatch, state: {statistics: {result}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const payload = await getStatisticsData('result')
      dispatch({type: ADD_STATISTICS_RESULT, payload})
    })()
  }, [])

  return (
    <Container>
      <Title>Result</Title>
      <Row mt={'20'} expand={true}>
        <Col size={7}>
          <PercentWidget state={result} dimension='application_result'/>
        </Col>
      </Row>
    </Container>
  )
}

export {Result}
