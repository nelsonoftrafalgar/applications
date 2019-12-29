import Add from '../assets/icons/add.svg'
import { INavItemProps } from '../models/nav'
import Search from '../assets/icons/search.svg'
import Statistics from '../assets/icons/statistics.svg'

export const navigation: INavItemProps[] = [
  {
    name: 'Search',
    icon: Search,
    path: '/search'
  },
  {
    name: 'Add',
    icon: Add,
    path: '/add'
  },
  {
    name: 'Statistics',
    icon: Statistics,
    path: '/statistics',
    sub_group: [
      {
        name: 'Position',
        path: '/statistics/position'
      },
      {
        name: 'Salary',
        path: '/statistics/salary'
      },
      {
        name: 'Date',
        path: '/statistics/date'
      },
      {
        name: 'Result',
        path: '/statistics/result'
      }
    ]
  }
]

export const initialState = {
  Search: false,
  Add: false,
  Statistics: false,
  Position: false,
  Salary: false,
  Date: false,
  Result: false
}
