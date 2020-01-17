import React, { useContext } from 'react'
import {TableHead, TableRow} from './Table'

import EditModal from './EditModal'
import { ISearchResult } from '../models/search'
import { MainContext } from '../context/context'
import { Td } from '../styles'
import { globalStyles } from '../styles/styles'
import { searchTableHead } from '../data/table'
import styled from 'styled-components'
import { useEditModalState } from '../helpers/useEditModalState'

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
  const {dispatch, state: {search: {results}}} = useContext(MainContext)
  const {editModalOpen, handleOpenEditModal} = useEditModalState(dispatch)

  const renderSearchResults = results !== 'Nothing found' ? results.map((item: ISearchResult) => {
    const {id} = item
    const keys = Object.keys(item).filter((key) => key !== 'id')
    const data = keys.map((key, index) => <Td key={`${index} ${id}`}>{item[key as keyof ISearchResult]}</Td>)
    return <TableRow handleOpenEditModal={handleOpenEditModal} id={id} key={id} data={data}/>
  }) : []

  const editItem = Array.isArray(results)
    ? results.find((result: ISearchResult) => result.id === editModalOpen.itemId)
    : {}

  return (
    <>
      <Container>
        <Table>
          <TableHead data={searchTableHead}/>
          <tbody>
            {renderSearchResults}
          </tbody>
        </Table>
      </Container>
      {editModalOpen.isOpen && <EditModal handleOpenEditModal={handleOpenEditModal} editItem={editItem}/>}
    </>
  )
}

export default SearchResults
