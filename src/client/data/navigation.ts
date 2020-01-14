import { INodePage, Node, Page } from '../services'

import Add from '../assets/icons/add.svg'
import Bad from '../assets/icons/bad.svg'
import { IStringIndexObject } from '../models/main'
import Search from '../assets/icons/search.svg'
import Statistics from '../assets/icons/statistics.svg'
import { getInitialNavState } from '../helpers'

const page = new Page()

const search = new Node('Search', '/search', Search)
const add = new Node('Add', '/add', Add)
const bad = new Node('Bad', '/bad', Bad)
const statistics = new Node('Statistics', '/statistics', Statistics)
const position = new Node('Position', '/statistics/position')
const salary = new Node('Salary', '/statistics/salary')
const date = new Node('Date', '/statistics/date')
const result = new Node('Result', '/statistics/result')

page
  .append(search)
  .append(add)
  .append(bad)
  .append(statistics
    .append(position)
    .append(salary)
    .append(date)
    .append(result)
    )

export const navigation: INodePage[] = page.items

const navItems: IStringIndexObject<boolean> = {
  Search: false,
  Add: false,
  Bad: false,
  Statistics: false,
  Position: false,
  Salary: false,
  Date: false,
  Result: false
}

export const initialNavState = getInitialNavState(navItems)
