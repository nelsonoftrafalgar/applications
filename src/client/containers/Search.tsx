import { Col, Row } from '../grid'
import {Section, Title} from '../styles'

import React from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

const Search = () => {
  return (
    <Section scrollOverflow={true}>
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
    </Section>
  )
}

export default Search
