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

export interface IDate {
  [key: string]: number | string
  id: number
  application_date: string
}

export interface IStatisticsState {
  position: IPosition[]
  result: IResult[]
  salary: ISalary[]
  date: IDate[]
}

export interface IDateData {
  date: string
  quantity: number
}

export interface IDateWidgetProps {
  data: IDateData[]
}

export interface ICustomLabelArgs {
  [key: string]: number
}

export interface ISalaryData {
  [key: string]: number
}

export interface IQuantityWidgetProps {
  title: string
  data: IBarChartData[]
  color: string
}

export interface IPercentWidgetProps {
  state: Array<IPosition | IResult>
  dimension: string
}

export interface IPieChartDataItem {
  name: string
  value: number
}

export interface IBarChartData {
  value: string
  quantity: number
}

export interface IChartProps<D> {
  data: D
  color: string
  parentWidth: number
}

export interface IPieChartWithLegendProps {
  data: IPieChartDataItem[]
  colors: string[]
  parentWidth: number
}
