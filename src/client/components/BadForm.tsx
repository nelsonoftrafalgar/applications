import {Button, Error, Form, Input, Status} from '../styles'
import React, { useContext } from 'react'
import { badFormInputs, validationErrors } from '../data/form'

import { BAD_ADD_STATUS } from '../state/actions'
import { IBadState } from '../models/bad'
import { MainContext } from '../context/context'
import { addBadCompany } from '../services/RESTClient'
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

const BadForm = () => {
  const {dispatch, state} = useContext(MainContext)
  const {error, submitError, validateInput, validateSubmit} = useValidation(validationErrors)
  const {bad_add_status} = state.bad

  const handleFormChange = createFormChange(validateInput, dispatch)
  const handleFormSubmit = createFormSubmit<IBadState>(
    validateSubmit,
    dispatch,
    state.bad,
    ['bad_add_status', 'results'],
    BAD_ADD_STATUS,
    addBadCompany
  )

  const placeHolders = Object.keys(validationErrors)

  const renderInputs = badFormInputs.map((input, index: number) => {
    return (
      <Input
        margin={'0 20px 0 0'}
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
        <Button margin={'0 20px 0 0'} padding={'10px 20px'} type='submit'>Submit</Button>
        {bad_add_status && <Status>Added successfully</Status>}
        {error && <Error>{error}</Error>}
        {submitError && <Error>{submitError}</Error>}
      </Form>
    </Container>
  )
}

export default BadForm
