import { ICustomLabelArgs, IDate, IDateData, IPosition, IResult, ISalary, ISalaryData } from '../models/statistics'

import React from 'react'
import { globalStyles } from '../styles/styles'

export const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}: ICustomLabelArgs) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const style = {fontFamily: `${globalStyles.basic_font_family}`}
  const percentValue = (percent * 100).toFixed(0)
  return (
    <text style={style} x={x} y={y} fill='white' textAnchor='middle' dominantBaseline='central'>
      {+percentValue > 5 ? `${percentValue}%` : ''}
    </text>
  )
}

export const legendFormatter = (value: string) => {
  const style = {
    color: `${globalStyles.basic_font_color}`,
    fontFamily: `${globalStyles.basic_font_family}`,
    marginLeft: '7px'
  }
  return <span style={style}>{value}</span>
}

const getNames = <T extends IPosition | IResult | ISalary | IDate, P extends unknown> (
  state: T[],
  dimnesion: string
) => {
  const names: P[] = []
  for (const item of state) {
    const name = item[dimnesion] as P
    if (name && !names.includes(name)) {
      names.push(name)
    }
  }
  return names
}

const getQuantity = <T extends IPosition | IResult>(state: T[], name: string, dimension: string) => {
  const result = state.filter((el) => el[dimension] === name)
  return result.length
}

export const getChartData = <T extends IPosition | IResult> (state: T[], dimension: string) => {
  return getNames<T, string>(state, dimension).map((name) => ({name, value: getQuantity<T>(state, name, dimension)}))
}

export const getSalaryValues = (state: ISalary[], dimnesion: string) => {
  const values = getNames<ISalary, number>(state, dimnesion)
  return values.sort((a: number, b: number) => a - b).map((value) => {
    const quantity = state.filter((item) => item[dimnesion] === value).length
    return {value: String(value), quantity}
  })
}

export const getDateValues = (state: IDate[], dimnesion: string) => {
  const values = getNames<IDate, string>(state, dimnesion)
  return values.map((date) => {
    const quantity = state.filter((item) => item[dimnesion] === date).length
    return {date, quantity}
  })
}

export const getDatesRange = () => {
  let dates: IDateData[] = []
  const startDate = new Date('2018-05-11')
  const endDate = new Date()
  while (startDate < endDate) {
    const dateData = {date: startDate.toISOString().slice(2, 10).split('-').reverse().join('-'), quantity: 0}
    dates = [...dates, dateData]
    startDate.setDate(startDate.getDate() + 1)
  }
  return dates
}

export const getDateChartData = (range: IDateData[], values: IDateData[]) => {
  return range.map((item) => {
    const dateMatch = values.find((value) => value.date === item.date)
    item.quantity = dateMatch ? dateMatch.quantity : item.quantity
    return item
  })
}

export const mergeSalaryData = (min: ISalaryData[], max: ISalaryData[]) => {
  return min.map((item: ISalaryData, index: number) => {
    return {id: item.id, salary_min: item.salary_min, salary_max: max[index].salary_max}
  })
}
