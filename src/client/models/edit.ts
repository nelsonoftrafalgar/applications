import { ISearchResult } from './search'
import { IStringIndexObject } from './main'

export interface IEditState extends ISearchResult, IStringIndexObject<string | number> {
  edit_status: string
}
