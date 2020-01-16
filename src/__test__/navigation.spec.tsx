import {act, renderHook} from '@testing-library/react-hooks'
import { fireEvent, render } from '@testing-library/react'

import { INavItemSubGroup } from '../client/models/nav'
import { NavContext } from '../client/context/context'
import NavItem from '../client/components/NavItem'
import NavSubItem from '../client/components/NavSubItem'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { initialNavState } from '../client/data/navigation'
import { useNavState } from '../client/helpers'

const initialSearchState = initialNavState.Search
const initialStatisticsState = initialNavState.Statistics
const initialPositionState = initialNavState.Position
const initialDateState = initialNavState.Date

const parentNavSetup = (navItem: string, subGroup?: INavItemSubGroup[]) => {
  const {result} = renderHook(useNavState)
  const mockProps = {
    icon: '',
    name: navItem,
    sub_group: subGroup,
    path: ''
  }

  const mockContextValue = {...result.current}
  const {getByTestId} = render(
    <Router>
      <NavContext.Provider value={mockContextValue}>
        <NavItem {...mockProps}/>
      </NavContext.Provider>
    </Router>
  )

  return {result, getByTestId}
}

const childNavSetup = (navItem: string) => {
  const {result} = renderHook(useNavState)
  const mockProps = {
    name: navItem,
    parent: 'Statistics',
    path: ''
  }

  const mockContextValue = {...result.current}
  const {getByTestId} = render(
    <Router>
      <NavContext.Provider value={mockContextValue}>
        <NavSubItem {...mockProps}/>
      </NavContext.Provider>
    </Router>
  )

  return {result, getByTestId}
}

test('useNavState hook works', () => {
  const {result} = renderHook(useNavState)
  const {handleSetActiveItem} = result.current

  act(() => {
    handleSetActiveItem('Search', null, null)()
  })

  const {Search: currentSearchState} = result.current.activeNavState
  expect(currentSearchState).not.toEqual(initialSearchState)

  act(() => {
    handleSetActiveItem('Statistics', 'Position', null)()
  })

  const {Statistics: currentStatisticsState, Position: currentPositionState} = result.current.activeNavState
  expect(currentStatisticsState).not.toEqual(initialStatisticsState)
  expect(currentPositionState).not.toEqual(initialPositionState)

  act(() => {
    handleSetActiveItem('Date', null, 'Statistics')()
  })

  const {Date: currentDateState} = result.current.activeNavState
  expect(currentStatisticsState).not.toEqual(initialStatisticsState)
  expect(currentDateState).not.toEqual(initialDateState)
})

test('search navigation works', () => {
  const navItem = 'Search'
  const {result, getByTestId} = parentNavSetup(navItem)
  const item = getByTestId(`${navItem}-NAV-ITEM`)
  fireEvent.click(item)

  const currentNavItemState = result.current.activeNavState[navItem]
  expect(currentNavItemState).not.toEqual(initialNavState[navItem])
})

test('add navigation works', () => {
  const navItem = 'Add'
  const {result, getByTestId} = parentNavSetup(navItem)
  const item = getByTestId(`${navItem}-NAV-ITEM`)
  fireEvent.click(item)

  const currentNavItemState = result.current.activeNavState[navItem]
  expect(currentNavItemState).not.toEqual(initialNavState[navItem])
})

test('bad navigation works', () => {
  const navItem = 'Bad'
  const {result, getByTestId} = parentNavSetup(navItem)
  const item = getByTestId(`${navItem}-NAV-ITEM`)
  fireEvent.click(item)

  const currentNavItemState = result.current.activeNavState[navItem]
  expect(currentNavItemState).not.toEqual(initialNavState[navItem])
})

test('statistics navigation works', () => {
  const navItem = 'Statistics'
  const childItem = 'Position'
  const childGroup = [{name: childItem, parent: navItem, path: ''}]
  const {result, getByTestId} = parentNavSetup(navItem, childGroup)
  const item = getByTestId(`${navItem}-NAV-ITEM`)
  fireEvent.click(item)

  const currentNavItemState = result.current.activeNavState[navItem]
  const childNavItemState = result.current.activeNavState[childItem]
  expect(currentNavItemState).not.toEqual(initialNavState[navItem])
  expect(childNavItemState).not.toEqual(initialNavState[childItem])
})

test('position navigation works', () => {
  const navSubItem = 'Position'
  const {result, getByTestId} = childNavSetup(navSubItem)
  const item = getByTestId(`${navSubItem}-NAV-SUBITEM`)
  fireEvent.click(item)

  const currentNavSubItemState = result.current.activeNavState[navSubItem]
  const parentNavItemState = result.current.activeNavState.Statisitics
  expect(currentNavSubItemState).not.toEqual(initialNavState[navSubItem])
  expect(parentNavItemState).not.toEqual(initialStatisticsState)
})

test('date navigation works', () => {
  const navSubItem = 'Date'
  const {result, getByTestId} = childNavSetup(navSubItem)
  const item = getByTestId(`${navSubItem}-NAV-SUBITEM`)
  fireEvent.click(item)

  const currentNavSubItemState = result.current.activeNavState[navSubItem]
  const parentNavItemState = result.current.activeNavState.Statisitics
  expect(currentNavSubItemState).not.toEqual(initialNavState[navSubItem])
  expect(parentNavItemState).not.toEqual(initialStatisticsState)
})

test('result navigation works', () => {
  const navSubItem = 'Result'
  const {result, getByTestId} = childNavSetup(navSubItem)
  const item = getByTestId(`${navSubItem}-NAV-SUBITEM`)
  fireEvent.click(item)

  const currentNavSubItemState = result.current.activeNavState[navSubItem]
  const parentNavItemState = result.current.activeNavState.Statisitics
  expect(currentNavSubItemState).not.toEqual(initialNavState[navSubItem])
  expect(parentNavItemState).not.toEqual(initialStatisticsState)
})

test('salary navigation works', () => {
  const navSubItem = 'Salary'
  const {result, getByTestId} = childNavSetup(navSubItem)
  const item = getByTestId(`${navSubItem}-NAV-SUBITEM`)
  fireEvent.click(item)

  const currentNavSubItemState = result.current.activeNavState[navSubItem]
  const parentNavItemState = result.current.activeNavState.Statisitics
  expect(currentNavSubItemState).not.toEqual(initialNavState[navSubItem])
  expect(parentNavItemState).not.toEqual(initialStatisticsState)
})
