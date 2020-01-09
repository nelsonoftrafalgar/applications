import {
  EDIT_APPLICATION_DATE,
  EDIT_APPLICATION_RESULT,
  EDIT_COMPANY_NAME,
  EDIT_POSITION_NAME,
  EDIT_SALARY_MAX,
  EDIT_SALARY_MIN
} from '../state/actions'

import { IFormInputsData } from '../models/main'

export const formInputs: IFormInputsData[] = [
  {action: EDIT_COMPANY_NAME, type: 'text'},
  {action: EDIT_POSITION_NAME, type: 'text'},
  {action: EDIT_SALARY_MIN, type: 'number'},
  {action: EDIT_SALARY_MAX, type: 'number'},
  {action: EDIT_APPLICATION_DATE, type: 'text'},
  {action: EDIT_APPLICATION_RESULT, type: 'text'}
]
