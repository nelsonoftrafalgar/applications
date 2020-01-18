import { getSalaryValues } from '../../../client/helpers/statistics'

const mockData = [
  {id: 1, salary_min: 10, salary_max: 15},
  {id: 2, salary_min: 15, salary_max: 16},
  {id: 3, salary_min: 7, salary_max: 20},
  {id: 4, salary_min: 3, salary_max: 13},
  {id: 5, salary_min: 3, salary_max: 15},
  {id: 6, salary_min: 13, salary_max: 14},
  {id: 7, salary_min: 8, salary_max: 18},
  {id: 8, salary_min: 6, salary_max: 10},
  {id: 9, salary_min: 10, salary_max: 15},
  {id: 10, salary_min: 11, salary_max: 12}
]

const mockResultMin = [
  {value: '3', quantity: 2},
  {value: '6', quantity: 1},
  {value: '7', quantity: 1},
  {value: '8', quantity: 1},
  {value: '10', quantity: 2},
  {value: '11', quantity: 1},
  {value: '13', quantity: 1},
  {value: '15', quantity: 1}
]

const mockResultMax = [
  {value: '10', quantity: 1},
  {value: '12', quantity: 1},
  {value: '13', quantity: 1},
  {value: '14', quantity: 1},
  {value: '15', quantity: 3},
  {value: '16', quantity: 1},
  {value: '18', quantity: 1},
  {value: '20', quantity: 1}
]

test('getSalaryValues works', () => {
  expect(getSalaryValues(mockData, 'salary_min')).toStrictEqual(mockResultMin)
  expect(getSalaryValues(mockData, 'salary_max')).toStrictEqual(mockResultMax)
})
