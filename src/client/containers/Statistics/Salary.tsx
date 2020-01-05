import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import { getSalaryValues, mergeSalaryData } from '../../helpers/statistics'

import { ADD_STATISTICS_SALARY } from '../../state/actions'
import { MainContext } from '../../context/context'
import { QuantityWidget } from '../../components/Widgets'
import { colors } from '../../data/statistics'
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

const Salary = () => {
  const {dispatch, state: {statistics: {salary}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const min = await getStatisticsData('salary/min')
      const max = await getStatisticsData('salary/max')
      const payload = mergeSalaryData(min, max)
      dispatch({type: ADD_STATISTICS_SALARY, payload})
    })()
  }, [])

  const salaryMinValues = getSalaryValues(salary, 'salary_min')
  const salaryMaxValues = getSalaryValues(salary, 'salary_max')

  return (
    <Container>
      <Title>Salary</Title>
      <Row mt={'20'}>
        <Col size={12}>
          <QuantityWidget title={'Min salaries'} data={salaryMinValues} color={colors[1]}/>
        </Col>
      </Row>
      <Row mt={'20'} pb={'20'}>
        <Col size={12}>
          <QuantityWidget title={'Max salaries'} data={salaryMaxValues} color={colors[2]}/>
        </Col>
      </Row>
    </Container>
  )
}

export {Salary}
