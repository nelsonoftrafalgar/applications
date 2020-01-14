import { ActionType, IAction } from '../models/main'

import {ValidateSubmit} from './useValidation'

const prepareRequestBody = <S>(state: S, keys: Array<keyof S>) => {
  const requestBody = {...state} as S
  keys.forEach((key) => delete requestBody[key])
  return requestBody
}

export const createFormSubmit = <S>(
  validate: ValidateSubmit,
  dispatch: React.Dispatch<IAction>,
  state: S,
  keys: Array<keyof S>,
  actionType: ActionType,
  request: (requestBody: S) => Promise<any>
) => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestBody = prepareRequestBody(state, keys)
    const values = Object.values(requestBody)
    const istValid = validate(values)

    if (!istValid) {
      const payload = await request(requestBody)
      dispatch({type: actionType, payload})
      setTimeout(() => dispatch({type: actionType, payload: ''}), 3000)
    }
  }
}
