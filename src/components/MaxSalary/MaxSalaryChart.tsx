import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { MaxSalaryChartProps } from './types'
import { useTheme } from 'styled-components'

export const MaxSalaryChart = ({ data }: MaxSalaryChartProps) => {
	const chartRef = useRef(null)
	const theme = useTheme()

	const xAxisData = Object.keys(data)
	const seriesData = Object.values(data)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const { green } = theme.colors.primary

		const options = {
			xAxis: {
				type: 'category',
				data: xAxisData,
				axisLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			},
			yAxis: {
				type: 'value',
				splitLine: {
					show: true,
					lineStyle: {
						type: [1, 5]
					}
				}
			},
			series: [
				{
					data: seriesData,
					type: 'bar',
					itemStyle: {
						color: green
					}
				}
			],

			grid: {
				bottom: '15%',
				top: '5%'
			}
		}

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data, theme.colors.primary, seriesData, xAxisData])

	return <ChartContainer ref={chartRef} />
}
