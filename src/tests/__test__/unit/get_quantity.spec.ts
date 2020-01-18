import { getQuantity } from '../../../client/helpers/statistics'

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

test('getQuantity works', () => {
  expect(getQuantity(mockData, 'test1', dimension)).toBe(3)
  expect(getQuantity(mockData, 'test2', dimension)).toBe(2)
  expect(getQuantity(mockData, 'test3', dimension)).toBe(3)
  expect(getQuantity(mockData, 'test4', dimension)).toBe(2)
})
