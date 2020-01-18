import { mergeSalaryData } from '../../../client/helpers/statistics'

const mockDataMin = [
  {id: 1, salary_min: 10},
  {id: 2, salary_min: 15},
  {id: 3, salary_min: 7},
  {id: 4, salary_min: 3},
  {id: 5, salary_min: 3},
  {id: 6, salary_min: 13},
  {id: 7, salary_min: 8},
  {id: 8, salary_min: 6},
  {id: 9, salary_min: 10},
  {id: 10, salary_min: 11}
]

const mockDataMax = [
  {id: 1, salary_max: 15},
  {id: 2, salary_max: 16},
  {id: 3, salary_max: 20},
  {id: 4, salary_max: 13},
  {id: 5, salary_max: 15},
  {id: 6, salary_max: 14},
  {id: 7, salary_max: 18},
  {id: 8, salary_max: 10},
  {id: 9, salary_max: 15},
  {id: 10, salary_max: 12}
]

const mockResult = [
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

test('mergeSalaryData works', () => {
  expect(mergeSalaryData(mockDataMin, mockDataMax)).toStrictEqual(mockResult)
})
