import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { MinSalaryChartProps } from './types'
import { useTheme } from 'styled-components'

export const MinSalaryChart = ({ data }: MinSalaryChartProps) => {
	const chartRef = useRef(null)
	const theme = useTheme()

	const xAxisData = Object.keys(data)
	const seriesData = Object.values(data)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const { orange } = theme.colors.primary

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
				minInterval: 1,
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
						color: orange
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
