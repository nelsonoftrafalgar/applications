import { initialNavState, navigation } from '../../client/data/navigation'

import { INodePage } from '../../client/services'
import { NavContext } from '../../client/context/context'
import NavItem from '../../client/components/NavItem'
import NavSubItem from '../../client/components/NavSubItem'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import TestRenderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/react'
import {renderHook} from '@testing-library/react-hooks'
import { useNavState } from '../../client/helpers'

const {act} = TestRenderer

const singleNavItem = navigation.find((item) => !item.sub_group)
const parentNavItem = navigation.find((item) => item.sub_group)
const childNavItem = parentNavItem?.sub_group?.find((item) => item.name)

const navItemSetup = (item: JSX.Element) => {
  const {result} = renderHook(useNavState)
  const mockContextValue = {...result.current}
  const {getByTestId} = render(
    <Router>
      <NavContext.Provider value={mockContextValue}>
        {item}
      </NavContext.Provider>
    </Router>
  )

  return {result, getByTestId}
}

test('single navigation item works', () => {
  const {result, getByTestId} = navItemSetup(<NavItem {...singleNavItem as INodePage}/>)
  const itemName = singleNavItem?.name as string
  const item = getByTestId(`${itemName}-NAV-ITEM`)

  act(() => {fireEvent.click(item)})

  const {activeNavState} = result.current
  const currentNavItemState = activeNavState[itemName]
  expect(currentNavItemState).not.toEqual(initialNavState[itemName])
})

test('parent navigation item works', () => {
  const {result, getByTestId} = navItemSetup(<NavItem {...parentNavItem as INodePage}/>)
  const itemName = parentNavItem?.name as string
  const childItemName = childNavItem?.name as string
  const item = getByTestId(`${itemName}-NAV-ITEM`)

  act(() => {fireEvent.click(item)})

  const {activeNavState} = result.current
  const currentNavItemState = activeNavState[itemName]
  const currentChildNavItemState = activeNavState[childItemName]
  expect(currentNavItemState).not.toEqual(initialNavState[itemName])
  expect(currentChildNavItemState).not.toEqual(initialNavState[childItemName])
})

test('child navigation item works', () => {
  const parentItemName = parentNavItem?.name as string
  const {result, getByTestId} = navItemSetup(<NavSubItem parent={parentItemName} {...childNavItem as INodePage}/>)
  const itemName = childNavItem?.name as string
  const item = getByTestId(`${itemName}-NAV-SUBITEM`)

  act(() => {fireEvent.click(item)})

  const {activeNavState} = result.current
  const currentNavItemState = activeNavState[itemName]
  const currentParentNavItemState = activeNavState[parentItemName]
  expect(currentNavItemState).not.toEqual(initialNavState[itemName])
  expect(currentParentNavItemState).not.toEqual(initialNavState[parentItemName])
})

test('useNavState hook works', () => {
  const {result} = renderHook(useNavState)
  const {handleSetActiveItem} = result.current
  const singleNavItemName = singleNavItem?.name as string
  const parentNavItemName = parentNavItem?.name as string
  const childNavItemName = childNavItem?.name as string

  act(() => handleSetActiveItem(singleNavItemName, null, null)())

  const currentSingleItemState = result.current.activeNavState[singleNavItemName]
  expect(currentSingleItemState).not.toEqual(initialNavState[singleNavItemName])

  act(() => handleSetActiveItem(parentNavItemName, childNavItemName, null)())

  const currentParentItemState = result.current.activeNavState[parentNavItemName]
  const currentChildItemState = result.current.activeNavState[childNavItemName]
  expect(currentParentItemState).not.toEqual(initialNavState[parentNavItemName])
  expect(currentChildItemState).not.toEqual(initialNavState[childNavItemName])

  act(() => handleSetActiveItem(childNavItemName, null, parentNavItemName)())

  const parentItemState = result.current.activeNavState[parentNavItemName]
  const childItemState = result.current.activeNavState[childNavItemName]
  expect(parentItemState).not.toEqual(initialNavState[parentNavItemName])
  expect(childItemState).not.toEqual(initialNavState[childNavItemName])
})

test('logo navigation works', () => {
  const {result} = renderHook(useNavState)
  const {handleSetActiveItem} = result.current

  act(() => handleSetActiveItem('', null, null)())

  const currentNavState = result.current.activeNavState
  expect(currentNavState).toEqual(initialNavState)
})
