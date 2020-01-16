import { INodePage } from '../services'
import { NavContext } from '../context/context'
import NavItem from '../components/NavItem'
import React from 'react'
import { StyledLink } from '../styles'
import { globalStyles } from '../styles/styles'
import { navigation } from '../data/navigation'
import styled from 'styled-components'
import { useNavState } from '../helpers/useNavState'

const {light_bg, basic_font_family, basic_font_color} = globalStyles

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${light_bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Logo = styled.h1`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
  margin-bottom: 10px;
`

const Nav = () => {
  const {activeNavState, handleSetActiveItem} = useNavState()
  const navContextValue = {activeNavState, handleSetActiveItem}
  const renderNav = navigation.map((item: INodePage) => {
    return <NavItem key={item.name} {...item}/>
  })

  return (
    <NavContext.Provider value={navContextValue}>
      <Container>
        <StyledLink to='/'>
          <Logo data-testid={'NAV-LOGO'} onClick={handleSetActiveItem('', null, null)}>Applications</Logo>
        </StyledLink>
        {renderNav}
      </Container>
    </NavContext.Provider>
  )
}

export default Nav
