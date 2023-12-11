import { Application, StatusType } from 'store/applications/types'

import { StatusChartDataItem } from '../components/Status/types'
import { theme } from 'styles/theme'

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

export const convertToPieChartData = (
	groupedByData: Record<StatusType, number>
) =>
	(Object.keys(groupedByData) as StatusType[]).map((key) => ({
		value: groupedByData[key],
		name: key
	}))

const { orange, navy, blue, violet, red, green } = theme.colors.primary

const colorMap: Record<StatusType, string> = {
	'not interested': orange,
	'no answer': blue,
	hire: violet,
	'bad agreement': red,
	'failed interview': navy,
	'successful interview': green
}

export const getDataColors = (data: StatusChartDataItem[]) =>
	data.map((status) => colorMap[status.name])

export const omitKey = (obj: Record<string, number>, keyToRemove: string) => {
	const { [keyToRemove]: _, ...newObject } = obj
	return newObject
}
