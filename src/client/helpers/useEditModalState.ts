import { IAction } from '../models/main'
import { SET_EDIT_STATE } from '../state/actions'
import { initialMainState } from '../containers/Main'
import { useState } from 'react'

export const useEditModalState = (dispatch: React.Dispatch<IAction>) => {
  const [editModalOpen, setEditModalOpen] = useState({isOpen: false, itemId: 0})

  const handleOpenEditModal = (id: number, isOpen: boolean) => () => {
    const newModalState = {isOpen, itemId: id}
    setEditModalOpen(newModalState)
    if (!id) {
      dispatch({type: SET_EDIT_STATE, payload: initialMainState.edit})
    }
  }

  return {editModalOpen, handleOpenEditModal}
}
