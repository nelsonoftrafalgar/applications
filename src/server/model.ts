export interface ISearchTypes {
  [key: string]: string | number
  company_name: string
  position_name: string
  application_result: string
}

export interface ISearchRequestParams {
  query: string
  type: string
}

export interface IAddRequestParams extends ISearchTypes {
  salary_min: number
  salary_max: number
  application_date: string
}

export interface IEditRequestParams extends IAddRequestParams {
  id: number
}
