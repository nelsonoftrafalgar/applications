import { ActionType, IAction } from '../models/main'
import produce, { Immutable } from 'immer'

import { Produced } from 'immer/dist/types'

type Reducer<S> = <Base extends Immutable<S>>(base: Base, action: IAction) => Produced<Base, S>

interface ICase<S> {
  actionType: ActionType
  handler: (draft: S, action: IAction) => S
}

interface ICreator<S> {
  case: (actionType: ActionType, key: keyof S) => ICreator<S>
  build: () => Reducer<S>
}

export const reducerCreator = <S>() => {
  const cases: Array<ICase<S>> = []
  const creator = {} as ICreator<S>

  creator.case = (actionType: ActionType, key: keyof S) => {
    const handler = (draft: S, action: IAction) => {
      if (!key) {
        draft = action.payload
      } else {
        draft[key] = action.payload
      }
      return draft
    }
    cases.push({ actionType, handler })

    return creator
  }

  creator.build = () => {
    return produce((draft: S, action: IAction) => {
      const searchedCase = cases.find((item) => item.actionType === action.type)
      return searchedCase ? searchedCase.handler(draft, action) : draft
    })
  }

  return creator
}
