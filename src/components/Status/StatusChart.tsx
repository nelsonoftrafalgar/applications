import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { StatusChartProps } from './types'
import { getDataColors } from './utils'

export const StatusChart = ({ data }: StatusChartProps) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)

		const options = {
			tooltip: {
				trigger: 'item',
				formatter: '{b} : {c} ({d}%)'
			},
			color: getDataColors(data),
			series: [
				{
					type: 'pie',
					radius: '85%',
					data,
					label: false,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data])

	return <ChartContainer ref={chartRef} />
}
