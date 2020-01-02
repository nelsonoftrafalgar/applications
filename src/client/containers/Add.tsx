import { Col, Row } from '../grid'

import AddForm from '../components/AddForm'
import React from 'react'
import { globalStyles } from '../styles/styles'
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

const Add = () => {
  return (
    <Container>
      <Title>Add</Title>
      <Row mt={'20'} expand={true}>
        <Col size={3}>
          <AddForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default Add
