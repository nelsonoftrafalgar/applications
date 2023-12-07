import { StatusType } from 'store/applications/types'

export interface StatusChartDataItem {
	value: number
	name: StatusType
}

export interface StatusChartProps {
	data: StatusChartDataItem[]
}
