import { IErrorState, SubmitValues } from '../helpers/useValidation'

export type ValidateFn = (value: string) => string
export type ValidateSubmit = (values: SubmitValues, formErrors: IErrorState) => string

interface IValidation {
  textInput: ValidateFn
  numberInput: ValidateFn
  submitInput: ValidateSubmit
}

class Validation implements IValidation {
  private error: string

  constructor() {
    this.error = ''
  }

  numberInput = (value: string) => {
    const hasNoPositiveValue = +value < 1
    this.error = hasNoPositiveValue ? 'Only positive numbers' : ''
    return this.error
  }

  textInput = (value: string) => {
    const isEmpty = !value
    const regex = /^[a-z_.A-Z0-9\s]*$/
    const hasSpecialChars = !regex.test(value)
    if (isEmpty) {
      this.error = 'No empty inputs'
    } else if (hasSpecialChars) {
      this.error = 'No special chars'
    } else {
      this.error = ''
    }
    return this.error
  }

  submitInput = (values: Array<string | number>, formErrors: any) => {
    const errors = Object.values(formErrors)
    const hasErrors = errors.find((el) => el)
    const hasEmptyValues =  !values.every((value: string | number) => value)
    this.error = hasEmptyValues || hasErrors ? 'Check your inputs' : ''
    return this.error
  }
}

const validation = new Validation()

export default validation
