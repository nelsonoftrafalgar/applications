import { getChartData } from '../../../client/helpers/statistics'

const mockData = [
  {id: 1, position_name: 'test1'},
  {id: 2, position_name: 'test1'},
  {id: 3, position_name: 'test1'},
  {id: 4, position_name: 'test2'},
  {id: 5, position_name: 'test2'},
  {id: 6, position_name: 'test3'},
  {id: 7, position_name: 'test3'},
  {id: 8, position_name: 'test3'},
  {id: 9, position_name: 'test4'},
  {id: 10, position_name: 'test4'}
]
const dimension = 'position_name'
const mockResult = [
  {name: 'test1', value: 3},
  {name: 'test2', value: 2},
  {name: 'test3', value: 3},
  {name: 'test4', value: 2}
]

test('getChartData works', () => {
  expect(getChartData(mockData, dimension)).toStrictEqual(mockResult)
})
