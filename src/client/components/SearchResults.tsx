import React, { useContext } from 'react'
import {TableHead, TableRow} from './Table'

import { ISearchResult } from '../models/search'
import { MainContext } from '../context/context'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const {light_bg} = globalStyles

const Container = styled.div`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
  height: 100%;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 5px;
`

const SearchResults = () => {
  const {state: {search: {results}}} = useContext(MainContext)

  const renderSearchResults = results !== 'Nothing found' ? results.map((item: ISearchResult) => {
    return <TableRow key={item.id} {...item}/>
  }) : []

  return (
    <Container>
      <Table>
        <TableHead/>
        <tbody>
          {renderSearchResults}
        </tbody>
      </Table>
    </Container>
  )
}

export default SearchResults
