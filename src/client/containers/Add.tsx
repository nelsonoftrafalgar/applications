import { Col, Row } from '../grid'
import {Section, Title} from '../styles'

import AddForm from '../components/AddForm'
import React from 'react'

const Add = () => {
  return (
    <Section>
      <Title>Add</Title>
      <Row mt={'20'} expand={true}>
        <Col size={3}>
          <AddForm/>
        </Col>
      </Row>
    </Section>
  )
}

export default Add
