import { ActionType, IStringIndexObject } from '../models/main'
import { Col, Row } from '../grid'
import { EDIT_STATUS, SET_EDIT_STATE } from '../state/actions'
import { IInputError, ISearchResult } from '../models/search'
import { InputType, useValidation } from '../helpers/useValidation'
import React, { useContext, useEffect } from 'react'

import { MainContext } from '../context/context'
import { addErrors } from '../data/add'
import { editApplication } from '../services/RESTClient'
import { formInputs } from '../data/edit'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const {
  light_bg,
  light_font_color,
  dark_bg,
  basic_font_family,
  form_error_color,
  form_success_color,
  basic_font_color
} = globalStyles

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

const Input = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  margin-bottom: 20px;
  font-family: ${basic_font_family};
`

const Button = styled.button`
  border-radius: 50px;
  padding: 10px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  cursor: pointer;
  font-family: ${basic_font_family};
  margin-bottom: 20px;
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

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Status = styled('p')<IInputError>`
  font-family: ${basic_font_family};
  ${({hasError}) =>  `color: ${hasError ? form_error_color : form_success_color};`}
`

const Error = styled.p`
  font-family: ${basic_font_family};
  color: ${form_error_color};
  margin-bottom: 20px;
`

const Title = styled.h2`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
  margin-bottom: 20px;
  text-align: center;
`

interface IEditModal {
  editItem: ISearchResult
  handleOpenEditModal: (id: number, isOpen: boolean) => () => void
}

const EditModal: React.FC<IEditModal> = ({editItem, handleOpenEditModal}) => {
  const {error, submitError, validateInput, validateSubmit} = useValidation(addErrors)
  const {dispatch, state} = useContext(MainContext)
  const {edit_status} = state.edit

  useEffect(() => {
    const initialEditState: IStringIndexObject<string | number> = {...editItem}
    initialEditState.edit_status = ''
    dispatch({type: SET_EDIT_STATE, payload: initialEditState})
  }, [])

  const handleFormChange = (actionType: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, placeholder, type: inputType} = e.currentTarget
    validateInput(inputType as InputType, value, placeholder)
    const payload = inputType === 'number' ? +value : value
    dispatch({type: actionType, payload})
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestBody = {...state.edit}
    delete requestBody.edit_status
    const values = Object.values(requestBody)
    const istValid = validateSubmit(values)

    if (!istValid) {
      const payload = await editApplication(requestBody)
      dispatch({type: EDIT_STATUS, payload})
      setTimeout(() => dispatch({type: EDIT_STATUS, payload: ''}), 3000)
    }
  }

  const editKeys = Object.keys(editItem)
  const placeHolders = Object.keys(addErrors)

  const renderInputs = formInputs.map((item, index) => {
    const key = editKeys[index + 1]
    const value = state.edit[key]
    return (
      <Input
        key={index}
        value={value}
        type={item.type}
        placeholder={placeHolders[index]}
        onChange={handleFormChange(item.action)}
      />
    )
  })

  const hasError = edit_status !== 'Edited successfully'

  return (
    <Background>
      <Container>
        <Row>
          <Col size={12}>
            <Title>Edit</Title>
            <CloseButton onClick={handleOpenEditModal(0, false)}>&#10006;</CloseButton>
            <Form onSubmit={handleFormSubmit}>
              {renderInputs}
              <Button type='submit'>Submit</Button>
              {edit_status && <Status hasError={hasError}>Edited successfully</Status>}
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
