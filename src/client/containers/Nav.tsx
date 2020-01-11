import { INodePage } from '../services'
import { Link } from 'react-router-dom'
import { NavContext } from '../context/context'
import NavItem from '../components/NavItem'
import React from 'react'
import { globalStyles } from '../styles/styles'
import { navigation } from '../data/navigation'
import styled from 'styled-components'
import { useNavState } from '../helpers/useNavState'

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
  const {activeNavState, handleSetActiveItem} = useNavState()
  const navContextValue = {activeNavState, handleSetActiveItem}
  const renderNav = navigation.map((item: INodePage) => {
    return <NavItem key={item.name} {...item}/>
  })

  return (
    <NavContext.Provider value={navContextValue}>
      <Container>
        <StyledLink to='/'>
          <Logo onClick={handleSetActiveItem('', null, null)}>Applications</Logo>
        </StyledLink>
        {renderNav}
      </Container>
    </NavContext.Provider>
  )
}

export default Nav
