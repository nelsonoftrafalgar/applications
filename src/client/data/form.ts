import {
  ADD_APPLICATION_DATE,
  ADD_APPLICATION_RESULT,
  ADD_COMPANY_NAME,
  ADD_POSITION_NAME,
  ADD_SALARY_MAX,
  ADD_SALARY_MIN,
  EDIT_APPLICATION_DATE,
  EDIT_APPLICATION_RESULT,
  EDIT_COMPANY_NAME,
  EDIT_POSITION_NAME,
  EDIT_SALARY_MAX,
  EDIT_SALARY_MIN
} from '../state/actions'
import { IFormInputsData, IStringIndexObject } from '../models/main'

export const editFormInputs: IFormInputsData[] = [
  {action: EDIT_COMPANY_NAME, type: 'text'},
  {action: EDIT_POSITION_NAME, type: 'text'},
  {action: EDIT_SALARY_MIN, type: 'number'},
  {action: EDIT_SALARY_MAX, type: 'number'},
  {action: EDIT_APPLICATION_DATE, type: 'text'},
  {action: EDIT_APPLICATION_RESULT, type: 'text'}
]

export const validationErrors: IStringIndexObject<string> = {
  'Company name': '',
  'Position name': '',
  'Salary min': '',
  'Salary max': '',
  'Application date': '',
  'Application result': ''
}

export const addFormInputs: IFormInputsData[] = [
  {action: ADD_COMPANY_NAME, type: 'text'},
  {action: ADD_POSITION_NAME, type: 'text'},
  {action: ADD_SALARY_MIN, type: 'number'},
  {action: ADD_SALARY_MAX, type: 'number'},
  {action: ADD_APPLICATION_DATE, type: 'text'},
  {action: ADD_APPLICATION_RESULT, type: 'text'}
]
