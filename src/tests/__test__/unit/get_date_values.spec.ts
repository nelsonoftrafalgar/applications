import { getDateValues } from '../../../client/helpers/statistics'

const mockData = [
  {id: 1, application_date: '11-11-11'},
  {id: 2, application_date: '12-11-11'},
  {id: 3, application_date: '11-11-11'},
  {id: 4, application_date: '11-09-11'},
  {id: 5, application_date: '11-11-11'},
  {id: 6, application_date: '12-11-11'},
  {id: 7, application_date: '11-09-11'},
  {id: 8, application_date: '11-10-11'},
  {id: 9, application_date: '11-10-11'},
  {id: 10, application_date: '16-11-11'}
]

const mockResult = [
  {date: '11-11-11', quantity: 3},
  {date: '12-11-11', quantity: 2},
  {date: '11-09-11', quantity: 2},
  {date: '11-10-11', quantity: 2},
  {date: '16-11-11', quantity: 1}
]

test('getDateValues works', () => {
  expect(getDateValues(mockData, 'application_date')).toStrictEqual(mockResult)
})
