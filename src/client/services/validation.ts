import { IStringIndexObject } from '../models/main'
import { SubmitValues } from '../helpers/useValidation'

export type ValidateFn = (value: string) => string
export type ValidateSubmit = (values: SubmitValues, formErrors: IStringIndexObject<string>) => string

interface IValidation {
  textInput: ValidateFn
  numberInput: ValidateFn
  submitInput: ValidateSubmit
}

export const ERRORS = {
  emptyInput: 'No empty inputs',
  specialInput: 'No special chars',
  nonPositiveInput: 'Only positive numbers',
  submit: 'Check your inputs'
}

class Validation implements IValidation {
  private error: string

  constructor() {
    this.error = ''
  }

  numberInput = (value: string) => {
    const {nonPositiveInput} = ERRORS
    const hasNoPositiveValue = +value < 1
    this.error = hasNoPositiveValue ? nonPositiveInput : ''
    return this.error
  }

  textInput = (value: string) => {
    const {emptyInput, specialInput} = ERRORS
    const isEmpty = !value
    const regex = /^[a-z_.\-A-Z0-9\s]*$/
    const hasSpecialChars = !regex.test(value)
    if (isEmpty) {
      this.error = emptyInput
    } else if (hasSpecialChars) {
      this.error = specialInput
    } else {
      this.error = ''
    }
    return this.error
  }

  submitInput = (values: Array<string | number>, formErrors: any) => {
    const {submit} = ERRORS
    const errors = Object.values(formErrors)
    const hasErrors = errors.find((el) => el)
    const hasEmptyValues =  !values.every((value: string | number) => value)
    this.error = hasEmptyValues || hasErrors ? submit : ''
    return this.error
  }
}

const validation = new Validation()

export default validation
