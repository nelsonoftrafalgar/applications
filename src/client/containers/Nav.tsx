import { INavItemProps, INavState } from '../models/nav'
import React, { useState } from 'react'
import { initialState, navigation } from '../data/navigation'

import { Link } from 'react-router-dom'
import { NavContext } from '../context/context'
import NavItem from '../components/NavItem'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${globalStyles.light_bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Logo = styled.h1`
  color: ${globalStyles.basic_font_color};
  font-size: 20px;
  font-family: ${globalStyles.basic_font_family};
`

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin-bottom: 10px;
`

const Nav = () => {
  const [activeNavState, setActiveNavState] = useState<INavState>(initialState)
  const handleResetActiveState = () => setActiveNavState(initialState)

  const handleSetActiveItem = (name: string, firstChild: string | null, parent: string | null) => () => {
    const newState: INavState = {}
    const stateKeys = Object.keys(activeNavState)

    stateKeys.forEach((key) => {
      newState[key] = key === name || parent === key || firstChild === key
    })
    setActiveNavState(newState)
  }

  const navContextValue = {activeNavState, handleSetActiveItem}
  const renderNav = navigation.map((item: INavItemProps) => {
    return <NavItem key={item.name} {...item}/>
  })

  return (
    <NavContext.Provider value={navContextValue}>
      <Container>
        <StyledLink to='/'>
          <Logo onClick={handleResetActiveState}>Applications</Logo>
        </StyledLink>
        {renderNav}
      </Container>
    </NavContext.Provider>
  )
}

export default Nav
