import { Application } from '../../store/applications/types'

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
