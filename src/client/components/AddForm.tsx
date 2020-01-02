import { InputType, useValidation } from '../helpers/useValidation'
import React, { useContext } from 'react'
import { addErrors, formInputs } from '../data/add'

import { ADD_STATUS } from '../state/actions'
import { ActionType } from '../models/main'
import { IAddFormInputsData } from '../models/add'
import { IInputError } from '../models/search'
import { MainContext } from '../context/context'
import { addNewApplication } from '../services/RESTClient'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const {
  light_bg,
  light_font_color,
  dark_bg,
  basic_font_family,
  form_error_color,
  form_success_color
} = globalStyles

const Container = styled.div`
  width: 100%;
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
  padding: 10px 20px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  cursor: pointer;
  font-family: ${basic_font_family};
  margin-bottom: 20px;
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

const AddForm = () => {
  const {dispatch, state} = useContext(MainContext)
  const {error, submitError, validateInput, validateSubmit} = useValidation(addErrors)
  const {add_status} = state.add

  const handleFormChange = (actionType: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, placeholder, type: inputType} = e.currentTarget
    validateInput(inputType as InputType, value, placeholder)
    dispatch({type: actionType, payload: value})
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestBody = {...state.add}
    delete requestBody.add_status
    const values = Object.values(requestBody)
    const istValid = validateSubmit(values)

    if (!istValid) {
      const payload = await addNewApplication(requestBody)
      dispatch({type: ADD_STATUS, payload})
      setTimeout(() => dispatch({type: ADD_STATUS, payload: ''}), 3000)
    }
  }

  const placeHolders = Object.keys(addErrors)

  const renderInputs = formInputs.map((input: IAddFormInputsData, index: number) => {
    return (
      <Input
        key={placeHolders[index]}
        onChange={handleFormChange(input.action)}
        placeholder={placeHolders[index]}
        type={input.type}
      />
    )
  })

  const hasError = add_status !== 'Added successfully'

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        {renderInputs}
        <Button type='submit'>Submit</Button>
        {add_status && <Status hasError={hasError}>Added successfully</Status>}
        {error && <Error>{error}</Error>}
        {submitError && <Error>{submitError}</Error>}
      </Form>
    </Container>
  )
}

export default AddForm
