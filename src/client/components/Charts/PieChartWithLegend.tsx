import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from 'recharts'
import { legendFormatter, renderCustomizedLabel } from './helpers'

import React from 'react'

interface IPieChartDataItem {
  name: string
  value: number
}

interface IPieChartWithLegendProps {
  data: IPieChartDataItem[]
  colors: string[]
  parentWidth: number
}

const PieChartWithLegend: React.FC<IPieChartWithLegendProps> = ({data, colors, parentWidth}) => {
  const renderData = data.map((_, index) => {
    const color = colors[index % colors.length]
    return (
      <Cell
        key={`cell-${index}`}
        fill={color}
        stroke={color}
      />
    )
  })

  const HEIGHT = 400
  const WIDTH = parentWidth
  const legendHeight = 40 * data.length

  return (
    <ResponsiveContainer width={'100%'} height={HEIGHT}>
      <PieChart>
        <Legend
          align='right'
          layout='vertical'
          iconType='circle'
          iconSize={20}
          verticalAlign='middle'
          height={legendHeight}
          formatter={legendFormatter}
        />
        <Pie
          data={data}
          cx={WIDTH / 4}
          cy={HEIGHT / 2}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={WIDTH / 4}
          dataKey='value'
        >
          {renderData}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export {PieChartWithLegend}
