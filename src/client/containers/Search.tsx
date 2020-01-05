import { Col, Row } from '../grid'

import React from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { globalStyles } from '../styles/styles'
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

const Search = () => {
  return (
    <Container>
      <Title>Search</Title>
      <Row mt={'20'}>
        <Col size={12}>
          <SearchForm/>
        </Col>
      </Row>
      <Row pb={'20'} mt={'20'}>
        <Col size={12}>
          <SearchResults/>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
