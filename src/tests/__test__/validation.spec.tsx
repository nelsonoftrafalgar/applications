import {act, renderHook} from '@testing-library/react-hooks'

import { ERRORS } from '../../client/services/validation'
import { useValidation } from '../../client/helpers'
import { validationErrors } from '../../client/data/form'

const {specialInput, nonPositiveInput, submit, emptyInput} = ERRORS
const placeHolders = Object.keys(validationErrors)
const forbidenSpecialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
// tslint:disable-next-line: quotemark
'=', '+', '{', '[', '}', ']', ';', ':', '<', ',', '>', '/', '?', '`', '~', '"', "'"]
const allowedSpecialChars = ['.', '-', '_']

test('text input validation works', () => {
  const {result} = renderHook(() => useValidation(validationErrors))
  const {validateInput} = result.current

  forbidenSpecialChars.forEach((el: string) => {
    act(() => validateInput('text', `test${el}`, placeHolders[0]))
    expect(result.current.error).toEqual(specialInput)
  })

  allowedSpecialChars.forEach((el: string) => {
    act(() => validateInput('text', `test${el}`, placeHolders[0]))
    expect(result.current.error).toEqual('')
  })

  act(() => validateInput('text', ``, placeHolders[0]))
  expect(result.current.error).toEqual(emptyInput)
})

test('number input validation works', () => {
  const {result} = renderHook(() => useValidation(validationErrors))
  const {validateInput} = result.current

  act(() => validateInput('number', '0', 'Salary min'))
  expect(result.current.error).toEqual(nonPositiveInput)

  act(() => validateInput('number', '-1', 'Salary min'))
  expect(result.current.error).toEqual(nonPositiveInput)

  act(() => validateInput('number', '1', 'Salary min'))
  expect(result.current.error).toEqual('')
})

test('submit input validation works', () => {
  const {result} = renderHook(() => useValidation(validationErrors))
  const {validateInput} = result.current

  act(() => {result.current.validateSubmit(['test', 4])})
  expect(result.current.submitError).toEqual('')

  act(() => {result.current.validateSubmit(['test', ''])})
  expect(result.current.submitError).toEqual(submit)

  act(() => validateInput('text', '', placeHolders[0]))
  act(() => {result.current.validateSubmit(['test', 'test'])})
  expect(result.current.submitError).toEqual(submit)
})
