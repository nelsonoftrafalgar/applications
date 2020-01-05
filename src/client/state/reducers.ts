import {
  ADD_APPLICATION_DATE,
  ADD_APPLICATION_RESULT,
  ADD_COMPANY_NAME,
  ADD_POSITION_NAME,
  ADD_SALARY_MAX,
  ADD_SALARY_MIN,
  ADD_STATISTICS_POSITION,
  ADD_STATISTICS_RESULT,
  ADD_STATISTICS_SALARY,
  ADD_STATUS,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TYPE,
  SET_SEARCH_VALUE
} from './actions'
import { IAction, IMainState } from '../models/main'

import { IAddState } from '../models/add'
import { ISearchState } from '../models/search'
import { IStatisticsState } from '../models/statistics'
import produce from 'immer'

const searchReducer = produce((draft: ISearchState, action: IAction): ISearchState => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      draft.value = action.payload
      return draft
    case SET_SEARCH_TYPE:
      draft.type = action.payload
      return draft
    case SET_SEARCH_RESULTS:
      draft.results = action.payload
      return draft
    default:
      return draft
  }
})

const addReducer = produce((draft: IAddState, action: IAction): IAddState => {
  switch (action.type) {
    case ADD_COMPANY_NAME:
      draft.company_name = action.payload
      return draft
    case ADD_POSITION_NAME:
      draft.position_name = action.payload
      return draft
    case ADD_SALARY_MIN:
      draft.salary_min = +action.payload
      return draft
    case ADD_SALARY_MAX:
      draft.salary_max = +action.payload
      return draft
    case ADD_APPLICATION_DATE:
      draft.application_date = action.payload
      return draft
    case ADD_APPLICATION_RESULT:
      draft.application_result = action.payload
      return draft
    case ADD_STATUS:
      draft.add_status = action.payload
      return draft
    default:
      return draft
  }
})

const statisticsReducer = produce((draft: IStatisticsState, action: IAction): IStatisticsState => {
  switch (action.type) {
    case ADD_STATISTICS_POSITION:
      draft.position = action.payload
      return draft
    case ADD_STATISTICS_RESULT:
      draft.result = action.payload
      return draft
    case ADD_STATISTICS_SALARY:
      draft.salary = action.payload
      return draft
    default:
      return draft
  }
})

export const masterReducer = (draft: IMainState, action: IAction): IMainState => {
  return {
    search: searchReducer(draft.search, action),
    add: addReducer(draft.add, action),
    statistics: statisticsReducer(draft.statistics, action)
  }
}
