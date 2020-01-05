import { IPosition, IResult, ISalary } from '../../models/statistics'

import React from 'react'
import { globalStyles } from '../../styles/styles'

interface ICustomLabelArgs {
  [key: string]: number
}

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

const getNames = <T extends IPosition | IResult | ISalary, P> (state: T[], dimnesion: string) => {
  const names: P[] = []
  for (const item of state as T[]) {
    const name = item[dimnesion]
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
