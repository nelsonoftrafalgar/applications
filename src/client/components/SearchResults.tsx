import React, { useContext, useState } from 'react'
import {TableHead, TableRow} from './Table'

import EditModal from './EditModal'
import { ISearchResult } from '../models/search'
import { MainContext } from '../context/context'
import { SET_EDIT_STATE } from '../state/actions'
import { globalStyles } from '../styles/styles'
import { initialMainState } from '../containers/Main'
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
  const {dispatch, state: {search: {results}}} = useContext(MainContext)
  const [editModalOpen, setEditModalOpen] = useState({isOpen: false, itemId: 0})

  const handleOpenEditModal = (id: number, isOpen: boolean) => () => {
    const newModalState = {isOpen, itemId: id}
    setEditModalOpen(newModalState)
    if (!id) {
      dispatch({type: SET_EDIT_STATE, payload: initialMainState.edit})
    }
  }

  const renderSearchResults = results !== 'Nothing found' ? results.map((item: ISearchResult) => {
    return <TableRow handleOpenEditModal={handleOpenEditModal} key={item.id} {...item}/>
  }) : []

  const editItem = Array.isArray(results)
    ? results.find((result: ISearchResult) => result.id === editModalOpen.itemId)
    : {}

  return (
    <>
      <Container>
        <Table>
          <TableHead/>
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
