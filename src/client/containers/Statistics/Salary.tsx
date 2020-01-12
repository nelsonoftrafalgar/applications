import { Col, Row } from '../../grid'
import React, { useContext, useEffect } from 'react'
import {Section, Title} from '../../styles'
import { getSalaryValues, mergeSalaryData } from '../../helpers/statistics'

import { ADD_STATISTICS_SALARY } from '../../state/actions'
import { MainContext } from '../../context/context'
import { QuantityWidget } from '../../components/Widgets'
import { colors } from '../../data/statistics'
import { getStatisticsData } from '../../services/RESTClient'

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
    <Section scrollOverflow={true}>
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
    </Section>
  )
}

export {Salary}
