import { IStringIndexObject } from './main'

export interface IPosition extends IStringIndexObject<number | string> {
  id: number
  position_name: string
}

export interface IResult extends IStringIndexObject<number | string> {
  id: number
  application_result: string
}

export interface ISalary {
  id: number
  salary_min: number
  salary_max: number
}

export interface IDate {
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
