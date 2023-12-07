import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { MinSalaryChartProps } from './types'
import { getMinSalaryChartOptions } from 'charts/charts'

export const MinSalaryChart = ({ data }: MinSalaryChartProps) => {
	const chartRef = useRef(null)

	const xAxisData = Object.keys(data)
	const seriesData = Object.values(data)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const options = getMinSalaryChartOptions(xAxisData, seriesData)

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data, seriesData, xAxisData])

	return <ChartContainer ref={chartRef} />
}
