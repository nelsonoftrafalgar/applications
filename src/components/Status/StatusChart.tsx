import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { StatusChartProps } from './types'
import { useTheme } from 'styled-components'

export const StatusChart = ({ data }: StatusChartProps) => {
	const chartRef = useRef(null)
	const theme = useTheme()

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const { orange, navy, blue, violet, red, green } = theme.colors.primary

		const options = {
			tooltip: {
				trigger: 'item',
				formatter: '{b} : {c} ({d}%)'
			},
			color: [green, violet, orange, navy, red, blue],
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
	}, [data, theme.colors.primary])

	return <ChartContainer ref={chartRef} />
}
