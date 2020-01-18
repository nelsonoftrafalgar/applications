import { getNames } from '../../../client/helpers/statistics'

const mockData = [
  {id: 1, name: 'test1'},
  {id: 2, name: 'test2'},
  {id: 3, name: 'test1'},
  {id: 4, name: 'test3'},
  {id: 5, name: 'test3'},
  {id: 6, name: 'test2'}
]

const mockResult = ['test1', 'test2', 'test3']

test('getNames works', () => {
  expect(getNames(mockData, 'name')).toStrictEqual(mockResult)
})
