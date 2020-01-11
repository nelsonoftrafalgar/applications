import { ActionType, IAction } from '../models/main'
import { InputType, ValidateInput } from './useValidation'

export const createFormChange = (validate: ValidateInput, dispatch: React.Dispatch<IAction>) => {
  return (actionType: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, placeholder, type: inputType} = e.currentTarget
    validate(inputType as InputType, value, placeholder)
    const payload = inputType === 'number' ? +value : value
    dispatch({type: actionType, payload})
  }
}
