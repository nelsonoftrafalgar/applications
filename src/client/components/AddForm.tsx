import {Button, Error, Form, Input, Status} from '../styles'
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
import { useValidation } from '../helpers'

const {light_bg} = globalStyles

const Container = styled.div`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
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
    ['add_status'],
    ADD_STATUS,
    addNewApplication
  )

  const placeHolders = Object.keys(validationErrors)

  const renderInputs = addFormInputs.map((input, index: number) => {
    return (
      <Input
        margin={'0 0 20px 0'}
        key={placeHolders[index]}
        onChange={handleFormChange(input.action)}
        placeholder={placeHolders[index]}
        type={input.type}
        data-testid={`${placeHolders[index]}-ADD-FORM-INPUT`}
      />
    )
  })

  return (
    <Container>
      <Form flex_direction={'column'} onSubmit={handleFormSubmit}>
        {renderInputs}
        <Button
          margin={'0 0 20px 0'}
          padding={'10px 20px'}
          type='submit'
        >
          Submit
        </Button>
        {add_status && <Status>Added successfully</Status>}
        {error && <Error>{error}</Error>}
        {submitError && <Error>{submitError}</Error>}
      </Form>
    </Container>
  )
}

export default AddForm
