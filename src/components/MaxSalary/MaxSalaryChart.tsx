import * as echarts from 'echarts'

import { useEffect, useRef } from 'react'

import { ChartContainer } from './styles'
import { MaxSalaryChartProps } from './types'
import { getMaxSalaryChartOptions } from '../../charts/charts'

export const MaxSalaryChart = ({ data }: MaxSalaryChartProps) => {
	const chartRef = useRef(null)

	const xAxisData = Object.keys(data)
	const seriesData = Object.values(data)

	useEffect(() => {
		const chart = echarts.init(chartRef.current)
		const options = getMaxSalaryChartOptions(xAxisData, seriesData)

		chart.setOption(options)

		return () => {
			chart.dispose()
		}
	}, [data, seriesData, xAxisData])

	return <ChartContainer ref={chartRef} />
}
