import BadForm from '../../client/components/BadForm'
import React from 'react'
import {act} from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
import { formSetup } from '../helpers/form'

const mockInputValue = 'test345'

test('bad form updates state', () => {
  const {result, getByTestId} = formSetup(<BadForm/>)

  const input = getByTestId('Company name-BAD-FORM-INPUT')

  act(() => {fireEvent.change(input, {target: {value: mockInputValue}})})
  const {company_name} = result.current[0].bad
  expect(company_name).toEqual(mockInputValue)
})
