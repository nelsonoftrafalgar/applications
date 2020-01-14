import { IStringIndexObject } from './main'

export interface IBadResult extends IStringIndexObject<string | number> {
  id: number
  company_name: string
}

export interface IBadState {
  company_name: string
  results: IBadResult[],
  bad_add_status: string
}
