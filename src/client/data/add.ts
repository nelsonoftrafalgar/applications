import {
  ADD_APPLICATION_DATE,
  ADD_APPLICATION_RESULT,
  ADD_COMPANY_NAME,
  ADD_POSITION_NAME,
  ADD_SALARY_MAX,
  ADD_SALARY_MIN
} from '../state/actions'

import { IAddFormInputsData } from '../models/add'
import { IErrorState } from '../helpers/useValidation'

export const addErrors: IErrorState = {
  'Company name': '',
  'Position name': '',
  'Salary min': '',
  'Salary max': '',
  'Application date': '',
  'Application result': ''
}

export const formInputs: IAddFormInputsData[] = [
  {action: ADD_COMPANY_NAME, type: 'text'},
  {action: ADD_POSITION_NAME, type: 'text'},
  {action: ADD_SALARY_MIN, type: 'number'},
  {action: ADD_SALARY_MAX, type: 'number'},
  {action: ADD_APPLICATION_DATE, type: 'text'},
  {action: ADD_APPLICATION_RESULT, type: 'text'}
]
