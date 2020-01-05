import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { IChartProps, IDateData } from '../../models/statistics'

import React from 'react'
import { globalStyles } from '../../styles/styles'

const {light_font_color, dark_bg} = globalStyles
const style = {background: `${dark_bg}`, color: `${light_font_color}`, border: 'none'}
const margin = {top: 5, right: 30, left: 10, bottom: 5}

const LineChartComponent: React.FC<IChartProps<IDateData[]>> = ({parentWidth, color, data}) => {
  const WIDTH = parentWidth - margin.left - margin.right

  return (
    <LineChart
      width={WIDTH}
      height={300}
      data={data}
      margin={margin}
    >
      <CartesianGrid stroke={light_font_color} strokeDasharray='5' />
      <XAxis interval={50} dataKey='date' stroke={light_font_color}/>
      <YAxis stroke={light_font_color}/>
      <Tooltip contentStyle={style}/>
      <Line type='monotone' dataKey='quantity' stroke={color} dot={false} activeDot={{ r: 5 }} />
    </LineChart>
  )
}

export {LineChartComponent}
