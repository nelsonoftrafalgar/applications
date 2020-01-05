import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import React from 'react'
import { globalStyles } from '../../styles/styles'

export interface IBarChartData {
  value: string
  quantity: number
}

export interface IBarChartComponentProps {
  data: IBarChartData[]
  color: string
  parentWidth: number
}

const {light_font_color, dark_bg} = globalStyles
const style = {background: `${dark_bg}`, color: `${light_font_color}`, border: 'none'}
const margin = {top: 5, right: 30, left: 10, bottom: 5}

const BarChartComponent: React.FC<IBarChartComponentProps> = ({data, color, parentWidth}) => {
  const WIDTH = parentWidth - margin.left - margin.right

  return (
    <BarChart
      width={WIDTH}
      height={300}
      data={data}
      margin={margin}
    >
      <CartesianGrid stroke={light_font_color} vertical={false} strokeDasharray='5' />
      <XAxis dataKey='value' stroke={light_font_color}/>
      <YAxis stroke={light_font_color}/>
      <Tooltip contentStyle={style} cursor={false}/>
      <Bar dataKey='quantity' fill={color} />
    </BarChart>
  )
}

export {BarChartComponent}
