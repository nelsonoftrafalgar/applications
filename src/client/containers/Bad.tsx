import { Col, Row } from '../grid'
import { Section, Title } from '../styles'

import BadForm from '../components/BadForm'
import BadResults from '../components/BadResults'
import React from 'react'

const Bad = () => {
  return (
    <Section scrollOverflow={true}>
      <Title>Bad</Title>
      <Row mt={'20'}>
        <Col size={12}>
          <BadForm/>
        </Col>
      </Row>
      <Row pb={'20'} mt={'20'}>
        <Col size={12}>
          <BadResults/>
        </Col>
      </Row>
    </Section>
  )
}

export default Bad
