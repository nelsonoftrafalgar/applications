import { StatusChartDataItem } from 'components/Status/types'
import { getDataColors } from 'components/Status/utils'
import { theme } from 'styles/theme'

export const getStatusChartOptions = (data: StatusChartDataItem[]) => ({
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
})

export const getTimeLineChartOptions = (data: number[][]) => ({
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
				color: theme.colors.primary.navy
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
			data,
			itemStyle: {
				color: theme.colors.primary.navy
			}
		}
	],
	grid: {
		bottom: '15%',
		top: '5%'
	}
})

export const getMinSalaryChartOptions = (
	xAxisData: string[],
	seriesData: number[]
) => ({
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
				color: theme.colors.primary.orange
			}
		}
	],

	grid: {
		bottom: '15%',
		top: '5%'
	}
})

export const getMaxSalaryChartOptions = (
	xAxisData: string[],
	seriesData: number[]
) => ({
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
				color: theme.colors.primary.green
			}
		}
	],

	grid: {
		bottom: '15%',
		top: '5%'
	}
})
