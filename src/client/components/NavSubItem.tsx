import { Container, Dot, Section } from './NavItem'
import React, { useContext } from 'react'

import { INavSubItemProps } from '../models/nav'
import { NavContext } from '../context/context'
import { StyledLink } from '../styles'

const NavSubItem: React.FC<INavSubItemProps> = ({name, parent, path}) => {
  const {activeNavState, handleSetActiveItem} = useContext(NavContext)
  const isActive = activeNavState[name]

  return (
    <StyledLink to={path}>
      <Container
        data-testid={`${name}-NAV-SUBITEM`}
        isActive={isActive}
        onClick={handleSetActiveItem(name, null, parent)}
      >
        <Section>{name}</Section>
        <Dot isActive={isActive}/>
      </Container>
    </StyledLink>
  )
}

export default NavSubItem
