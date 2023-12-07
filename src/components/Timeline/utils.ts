export const generateDateArray = () => {
	const startDate = new Date('2018-04-01')
	const endDate = new Date()
	endDate.setDate(endDate.getDate() + 1)

	const dateArray = []

	for (
		let currentDate = new Date(startDate);
		currentDate <= endDate;
		currentDate.setDate(currentDate.getDate() + 1)
	) {
		const formattedDate = currentDate.toISOString().split('T')[0]
		dateArray.push([+new Date(formattedDate), 0])
	}

	return dateArray
}

export const populateTimeLine = (
	dataGroupedByApplied: Record<string, number>
) => {
	const dateArray = generateDateArray()
	Object.keys(dataGroupedByApplied).forEach((item) => {
		const date = +new Date(item)
		const timeLineIndex = dateArray.findIndex((item) => item[0] === date)
		dateArray[timeLineIndex][1] = dataGroupedByApplied[item]
	}, [])

	return dateArray
}
