import { IAddState } from './add'
import { ISearchState } from './search'
import { IStatisticsState } from './statistics'

export interface IMainState {
  search: ISearchState
  add: IAddState
  statistics: IStatisticsState
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

export interface IStringIndexObject<T> {
  [key: string]: T
}
