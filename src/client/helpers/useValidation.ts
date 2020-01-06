import { useEffect, useRef, useState } from 'react'

import { IStringIndexObject } from '../models/main'
import validation from '../services/validation'

export type InputType = 'text' | 'number'
export type SubmitValues = Array<string | number>

export const useValidation = (initialErrorState: IStringIndexObject<string>) => {
  const [formErrors, setFormErrors] = useState(initialErrorState)
  const [error, setError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const initialRender = useRef(true)
  const {textInput, numberInput, submitInput} = validation

  useEffect(() => {
    if (!initialRender.current) {
      const errors = Object.values(formErrors)
      const hasErrors = errors.find((el) => el)
      const errorMessage = hasErrors ? hasErrors : ''
      setError(errorMessage)
    }
    initialRender.current = false
  }, [formErrors])

  const validateInput = (type: InputType, value: string, placeholder: string) => {
    const isTextInput = type === 'text'
    const errorMessage = isTextInput ? textInput(value) : numberInput(value)
    const newErrorState: IStringIndexObject<string> = {...formErrors}
    newErrorState[placeholder] = errorMessage
    setSubmitError('')
    setFormErrors(newErrorState)
  }

  const validateSubmit = (values: SubmitValues) => {
    const errorMessage = submitInput(values, formErrors)
    if (errorMessage) {
      setSubmitError(errorMessage)
    }
    return errorMessage
  }

  return {error, submitError, validateInput, validateSubmit}
}
