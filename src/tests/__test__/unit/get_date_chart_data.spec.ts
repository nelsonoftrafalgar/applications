import { getDateChartData, getDatesRange } from '../../../client/helpers/statistics'

const mockRange = getDatesRange().slice(0, 10)

const mockVaules = [
  { date: '12-05-18', quantity: 1 },
  { date: '14-05-18', quantity: 2 },
  { date: '17-05-18', quantity: 4 },
  { date: '18-05-18', quantity: 5 },
  { date: '19-05-18', quantity: 3 }
]

const mockResult = [
  { date: '11-05-18', quantity: 0 },
  { date: '12-05-18', quantity: 1 },
  { date: '13-05-18', quantity: 0 },
  { date: '14-05-18', quantity: 2 },
  { date: '15-05-18', quantity: 0 },
  { date: '16-05-18', quantity: 0 },
  { date: '17-05-18', quantity: 4 },
  { date: '18-05-18', quantity: 5 },
  { date: '19-05-18', quantity: 3 },
  { date: '20-05-18', quantity: 0 }
]

test('getDateChartData works', () => {
  expect(getDateChartData(mockRange, mockVaules)).toStrictEqual(mockResult)
})
