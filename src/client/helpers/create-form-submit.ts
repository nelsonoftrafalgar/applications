import { ActionType, IAction } from '../models/main'

import {ValidateSubmit} from './useValidation'

export const createFormSubmit = <S>(
  validate: ValidateSubmit,
  dispatch: React.Dispatch<IAction>,
  state: S,
  key: keyof S,
  actionType: ActionType,
  request: (requestBody: S) => Promise<any>
) => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestBody = {...state} as S
    delete requestBody[key]
    const values = Object.values(requestBody)
    const istValid = validate(values)

    if (!istValid) {
      const payload = await request(requestBody)
      dispatch({type: actionType, payload})
      setTimeout(() => dispatch({type: actionType, payload: ''}), 3000)
    }
  }
}
