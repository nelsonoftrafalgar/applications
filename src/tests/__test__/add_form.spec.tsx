import AddForm from '../../client/components/AddForm'
import { IAddState } from '../../client/models/add'
import React from 'react'
import {act} from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
import { formSetup } from '../helpers/form'
import { initialMainState } from '../../client/containers/Main'
import { validationErrors } from '../../client/data/form'

const mockInputValues = ['test1', 'test2', 4, 5, 'test3', 'test4']
const placeHolders = Object.keys(validationErrors)
const stateKeys = Object.keys(initialMainState.add)

test('add form updates state', () => {
  const {result, getByTestId} = formSetup(<AddForm/>)

  placeHolders.forEach((placeholder, idx) => {
    const input = getByTestId(`${placeholder}-ADD-FORM-INPUT`)
    act(() => {fireEvent.change(input, {target: {value: mockInputValues[idx]}})})
    expect(result.current[0].add[stateKeys[idx] as keyof IAddState]).toEqual(mockInputValues[idx])
  })
})
