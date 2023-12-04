import { Application, StatusType } from '../../store/applications/types'

import { StatusChartDataItem } from './types'
import { theme } from '../../styles/theme'

export const applicationsGroupBy = (
	array: Application[] = [],
	key: keyof Application
) =>
	array.reduce((result: Record<string, number>, currentItem) => {
		const groupByKey = currentItem[key]

		if (!result[groupByKey]) {
			result[groupByKey] = 0
		}

		result[groupByKey]++

		return result
	}, {})

export const convertToPieChartData = (groupedByData: Record<string, number>) =>
	Object.keys(groupedByData).map((key) => ({
		value: groupedByData[key],
		name: key
	}))

const { orange, navy, blue, violet, red, green } = theme.colors.primary

const colorMap: Record<StatusType, string> = {
	'not interested': orange,
	'no answer': blue,
	hire: violet,
	'bad agreement': navy,
	'failed interview': red,
	'successful interview': green
}

export const getDataColors = (data: StatusChartDataItem[]) =>
	data.map((status) => colorMap[status.name])
