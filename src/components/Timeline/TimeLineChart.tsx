import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { TimeLineChartProps } from './types'
import { useTheme } from 'styled-components'

export const TimeLineChart = ({ data }: TimeLineChartProps) => {
	const chartRef = useRef(null)
	const theme = useTheme()

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const { navy } = theme.colors.primary

		const options = {
			tooltip: {
				trigger: 'axis',
				position: (pt: number[]) => [pt[0], '10%']
			},
			xAxis: {
				type: 'time',
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				minInterval: 1,
				splitLine: {
					show: true,
					lineStyle: {
						type: [1, 5],
						color: navy
					}
				}
			},
			dataZoom: [
				{
					type: 'inside',
					start: 0,
					end: 100
				}
			],
			series: [
				{
					type: 'line',
					smooth: true,
					symbol: 'none',
					data: data,
					itemStyle: {
						color: navy
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
	}, [data, theme.colors.primary])

	return <ChartContainer ref={chartRef} />
}
