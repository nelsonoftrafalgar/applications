import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { TimeLineChartProps } from './types'
import { getTimeLineChartOptions } from 'charts/charts'

export const TimeLineChart = ({ data }: TimeLineChartProps) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const options = getTimeLineChartOptions(data)

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data])

	return <ChartContainer ref={chartRef} />
}
