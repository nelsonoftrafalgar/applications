import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { StatusChartProps } from './types'
import { getStatusChartOptions } from '../../charts/charts'

export const StatusChart = ({ data }: StatusChartProps) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const options = getStatusChartOptions(data)

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data])

	return <ChartContainer ref={chartRef} />
}
