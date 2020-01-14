import {Button, Error, Form, Input, Status, Title} from '../styles'
import { Col, Row } from '../grid'
import { EDIT_STATUS, SET_EDIT_STATE } from '../state/actions'
import React, { useContext, useEffect } from 'react'
import { editFormInputs, validationErrors } from '../data/form'

import { IEditState } from '../models/edit'
import { ISearchResult } from '../models/search'
import { IStringIndexObject } from '../models/main'
import { MainContext } from '../context/context'
import { createFormChange } from '../helpers/create-form-change'
import { createFormSubmit } from '../helpers/create-form-submit'
import { editApplication } from '../services/RESTClient'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'
import { useValidation } from '../helpers/useValidation'

const {light_bg, basic_font_color} = globalStyles

const Background = styled.div`
  width: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 500px;
  background: ${light_bg};
  padding: 20px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 80px;
  background: transparent;
  color: ${basic_font_color};
  font-size: 25px;
  cursor: pointer;
`

interface IEditModal {
  editItem: ISearchResult
  handleOpenEditModal: (id: number, isOpen: boolean) => () => void
}

const EditModal: React.FC<IEditModal> = ({editItem, handleOpenEditModal}) => {
  const {error, submitError, validateInput, validateSubmit} = useValidation(validationErrors)
  const {dispatch, state} = useContext(MainContext)
  const {edit_status} = state.edit

  useEffect(() => {
    const initialEditState: IStringIndexObject<string | number> = {...editItem}
    initialEditState.edit_status = ''
    dispatch({type: SET_EDIT_STATE, payload: initialEditState})
  }, [])

  const handleFormChange = createFormChange(validateInput, dispatch)
  const handleFormSubmit = createFormSubmit<IEditState>(
    validateSubmit,
    dispatch,
    state.edit,
    ['edit_status'],
    EDIT_STATUS,
    editApplication
  )

  const editKeys = Object.keys(editItem)
  const placeHolders = Object.keys(validationErrors)

  const renderInputs = editFormInputs.map((item, index) => {
    const key = editKeys[index + 1]
    const value = state.edit[key]
    return (
      <Input
        margin={'0 0 20px 0'}
        key={index}
        value={value}
        type={item.type}
        placeholder={placeHolders[index]}
        onChange={handleFormChange(item.action)}
      />
    )
  })

  return (
    <Background>
      <Container>
        <Row>
          <Col size={12}>
            <Title text_align={'center'} margin={'0 0 20px 0'}>Edit</Title>
            <CloseButton onClick={handleOpenEditModal(0, false)}>&#10006;</CloseButton>
            <Form flex_direction={'column'} onSubmit={handleFormSubmit}>
              {renderInputs}
              <Button padding={'10px'} margin={'0 0 20px 0'} type='submit'>Submit</Button>
              {edit_status && <Status>Edited successfully</Status>}
              {error && <Error>{error}</Error>}
              {submitError && <Error>{submitError}</Error>}
            </Form>
          </Col>
        </Row>
      </Container>
    </Background>
  )
}

export default EditModal
