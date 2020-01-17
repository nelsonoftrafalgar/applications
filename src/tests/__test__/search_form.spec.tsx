import React from 'react'
import SearchForm from '../../client/components/SearchForm'
import {act} from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
import { formSetup } from '../helpers/form'

const mockInputValue = 'test'
const mockSelectValue = 'position_name'

test('search form updates state', () => {
  const {result, getByTestId} = formSetup(<SearchForm/>)

  const input = getByTestId('SEARCH-FORM-INPUT')
  const select = getByTestId('SEARCH-FORM-SELECT')

  act(() => {fireEvent.change(input, {target: {value: mockInputValue}})})
  act(() => {fireEvent.change(select, {target: {value: mockSelectValue}})})
  const {value, type} = result.current[0].search
  expect(value).toEqual(mockInputValue)
  expect(type).toEqual(mockSelectValue)
})
