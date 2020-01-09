import { IAddState } from './add'
import { IEditState } from './edit'
import { ISearchState } from './search'
import { IStatisticsState } from './statistics'
import { InputType } from '../helpers/useValidation'

export interface IMainState {
  search: ISearchState
  add: IAddState
  statistics: IStatisticsState
  edit: IEditState
}

export interface IMainContext {
  dispatch: React.Dispatch<IAction>
  state: IMainState
}

export interface IAction {
  type: ActionType,
  payload?: any
}

export type ActionType =
  | 'SET_SEARCH_VALUE'
  | 'SET_SEARCH_TYPE'
  | 'SET_SEARCH_RESULTS'
  | 'ADD_COMPANY_NAME'
  | 'ADD_POSITION_NAME'
  | 'ADD_SALARY_MIN'
  | 'ADD_SALARY_MAX'
  | 'ADD_APPLICATION_DATE'
  | 'ADD_APPLICATION_RESULT'
  | 'ADD_STATUS'
  | 'ADD_STATISTICS_POSITION'
  | 'ADD_STATISTICS_RESULT'
  | 'ADD_STATISTICS_SALARY'
  | 'ADD_STATISTICS_DATE'
  | 'EDIT_COMPANY_NAME'
  | 'EDIT_POSITION_NAME'
  | 'EDIT_SALARY_MIN'
  | 'EDIT_SALARY_MAX'
  | 'EDIT_APPLICATION_DATE'
  | 'EDIT_APPLICATION_RESULT'
  | 'EDIT_STATUS'
  | 'SET_EDIT_STATE'

export interface IStringIndexObject<T> {
  [key: string]: T
}

export interface IFormInputsData {
  action: ActionType
  type: InputType
}
