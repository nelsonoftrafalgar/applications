export interface ISearchResult {
  id: number
  company_name: string
  position_name: string
  salary_min: number
  salary_max: number
  application_date: string
  application_result: string
}

export interface ISearchState {
  value: string
  type: string
  results: any
}

export type SearchFormElementType = HTMLInputElement | HTMLSelectElement

export interface IInputError {
  hasError: boolean
}

export interface ITableRow extends ISearchResult {
  handleOpenEditModal: (id: number, isOpen: boolean) => () => void
}
