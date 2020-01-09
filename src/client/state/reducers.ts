import {
  ADD_APPLICATION_DATE,
  ADD_APPLICATION_RESULT,
  ADD_COMPANY_NAME,
  ADD_POSITION_NAME,
  ADD_SALARY_MAX,
  ADD_SALARY_MIN,
  ADD_STATISTICS_DATE,
  ADD_STATISTICS_POSITION,
  ADD_STATISTICS_RESULT,
  ADD_STATISTICS_SALARY,
  ADD_STATUS,
  EDIT_APPLICATION_DATE,
  EDIT_APPLICATION_RESULT,
  EDIT_COMPANY_NAME,
  EDIT_POSITION_NAME,
  EDIT_SALARY_MAX,
  EDIT_SALARY_MIN,
  EDIT_STATUS,
  SET_EDIT_STATE,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TYPE,
  SET_SEARCH_VALUE
} from './actions'
import { IAction, IMainState } from '../models/main'

import { IAddState } from '../models/add'
import { IEditState } from '../models/edit'
import { ISearchState } from '../models/search'
import { IStatisticsState } from '../models/statistics'
import { reducerCreator } from './reducerCreator'

export const searchReducer = reducerCreator<ISearchState>()
  .case(SET_SEARCH_VALUE, 'value')
  .case(SET_SEARCH_TYPE, 'type')
  .case(SET_SEARCH_RESULTS, 'results')
  .build()

const addReducer = reducerCreator<IAddState>()
  .case(ADD_COMPANY_NAME, 'company_name')
  .case(ADD_POSITION_NAME, 'position_name')
  .case(ADD_SALARY_MIN, 'salary_min')
  .case(ADD_SALARY_MAX, 'salary_max')
  .case(ADD_APPLICATION_DATE, 'application_date')
  .case(ADD_APPLICATION_RESULT, 'application_result')
  .case(ADD_STATUS, 'add_status')
  .build()

const statisticsReducer = reducerCreator<IStatisticsState>()
  .case(ADD_STATISTICS_POSITION, 'position')
  .case(ADD_STATISTICS_RESULT, 'result')
  .case(ADD_STATISTICS_SALARY, 'salary')
  .case(ADD_STATISTICS_DATE, 'date')
  .build()

const editReducer = reducerCreator<IEditState>()
  .case(SET_EDIT_STATE, '')
  .case(EDIT_COMPANY_NAME, 'company_name')
  .case(EDIT_POSITION_NAME, 'position_name')
  .case(EDIT_SALARY_MIN, 'salary_min')
  .case(EDIT_SALARY_MAX, 'salary_max')
  .case(EDIT_APPLICATION_DATE, 'application_date')
  .case(EDIT_APPLICATION_RESULT, 'application_result')
  .case(EDIT_STATUS, 'edit_status')
  .build()

export const masterReducer = (draft: IMainState, action: IAction): IMainState => {
  return {
    search: searchReducer(draft.search, action),
    add: addReducer(draft.add, action),
    statistics: statisticsReducer(draft.statistics, action),
    edit: editReducer(draft.edit, action)
  }
}
