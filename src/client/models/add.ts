import { ActionType } from './main'
import { InputType } from '../helpers/useValidation'

export interface IAddState {
  company_name: string
  position_name: string
  salary_min: number
  salary_max: number
  application_date: string
  application_result: string
  add_status: string
}

export interface IAddFormInputsData {
  action: ActionType
  type: InputType
}
