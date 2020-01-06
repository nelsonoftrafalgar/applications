import Add from '../assets/icons/add.svg'
import { INavItemProps } from '../models/nav'
import { IStringIndexObject } from '../models/main'
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

const navItems: IStringIndexObject<boolean> = {
  Search: false,
  Add: false,
  Statistics: false,
  Position: false,
  Salary: false,
  Date: false,
  Result: false
}

const getInitialNavState = (items: IStringIndexObject<boolean>) => {
  const state = {...items}
  const keys = Object.keys(state)
  keys.forEach((key: string) => {
    const {href} = window.location
    state[key] = href.includes(key.toLowerCase())
  })

  return state
}

export const initialState = getInitialNavState(navItems)
