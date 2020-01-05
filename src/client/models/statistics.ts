export interface IPosition {
  [key: string]: number | string
  id: number
  position_name: string
}

export interface IResult {
  [key: string]: number | string
  id: number
  application_result: string
}

export interface ISalary {
  [key: string]: number
  id: number
  salary_min: number
  salary_max: number
}

export interface IStatisticsState {
  position: IPosition[]
  result: IResult[]
  salary: ISalary[]
}
