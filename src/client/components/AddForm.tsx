import React, { useContext } from 'react'
import { addFormInputs, validationErrors } from '../data/form'

import { ADD_STATUS } from '../state/actions'
import { IAddState } from '../models/add'
import { MainContext } from '../context/context'
import { addNewApplication } from '../services/RESTClient'
import { createFormChange } from '../helpers/create-form-change'
import { createFormSubmit } from '../helpers/create-form-submit'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'
import { useValidation } from '../helpers/useValidation'

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

const Status = styled.p`
  font-family: ${basic_font_family};
  color: ${form_success_color};
`

const Error = styled.p`
  font-family: ${basic_font_family};
  color: ${form_error_color};
  margin-bottom: 20px;
`

const AddForm = () => {
  const {dispatch, state} = useContext(MainContext)
  const {error, submitError, validateInput, validateSubmit} = useValidation(validationErrors)
  const {add_status} = state.add

  const handleFormChange = createFormChange(validateInput, dispatch)
  const handleFormSubmit = createFormSubmit<IAddState>(
    validateSubmit,
    dispatch,
    state.add,
    'add_status',
    ADD_STATUS,
    addNewApplication
  )

  const placeHolders = Object.keys(validationErrors)

  const renderInputs = addFormInputs.map((input, index: number) => {
    return (
      <Input
        key={placeHolders[index]}
        onChange={handleFormChange(input.action)}
        placeholder={placeHolders[index]}
        type={input.type}
      />
    )
  })

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        {renderInputs}
        <Button type='submit'>Submit</Button>
        {add_status && <Status>Added successfully</Status>}
        {error && <Error>{error}</Error>}
        {submitError && <Error>{submitError}</Error>}
      </Form>
    </Container>
  )
}

export default AddForm
