import EditModal from '../../client/components/EditModal'
import { IEditState } from '../../client/models/edit'
import React from 'react'
import {act} from '@testing-library/react-hooks'
import {fireEvent} from '@testing-library/react'
import { formSetup } from '../helpers/form'
import { initialMainState } from '../../client/containers/Main'
import { validationErrors } from '../../client/data/form'

const mockInputValues = ['test1', 'test2', 4, 5, 'test3', 'test4']
const placeHolders = Object.keys(validationErrors)
const stateKeys = Object.keys(initialMainState.edit)
const mockProps = {
  editItem: {
    id: 1,
    company_name: 'test',
    position_name: 'test',
    salary_min: 2,
    salary_max: 4,
    application_date: 'test',
    application_result: 'test'
  },
  handleOpenEditModal: (id: number, isOpen: boolean) => () => {return}
}

test('edit modal updates state', () => {
  const {result, getByTestId} = formSetup(<EditModal {...mockProps}/>)

  placeHolders.forEach((placeholder, idx) => {
    const input = getByTestId(`${placeholder}-EDIT-MODAL-INPUT`)
    act(() => {fireEvent.change(input, {target: {value: mockInputValues[idx]}})})
    expect(result.current[0].edit[stateKeys[idx + 1] as keyof IEditState]).toEqual(mockInputValues[idx])
  })
})
