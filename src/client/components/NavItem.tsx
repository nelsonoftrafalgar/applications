import { IActiveNavItem, INavItemProps, INavItemSubGroup } from '../models/nav'
import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { NavContext } from '../context/context'
import NavSubItem from './NavSubItem'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

export const Container = styled('button')<IActiveNavItem>`
  border-radius: ${globalStyles.border_radius};
  ${({isActive}) => `background: ${isActive ? globalStyles.dark_bg : globalStyles.light_bg};`}
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  margin: 10px 0;
  cursor: pointer;
`

const Icon = styled.img`
  width: 15px;
  height: 15px;
`

export const Dot = styled('span')<IActiveNavItem>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${({isActive}) => `background: ${isActive ? globalStyles.nav_dot_color : globalStyles.light_bg};`}
  margin: 0 5px 0 auto;
`

const Chevron = styled('span')<IActiveNavItem>`
  color: ${globalStyles.light_font_color};
  ${({isActive}) => `transform: rotate(${isActive ? '90deg' : '270deg'});`}
  transition: transform .2s ease;
  margin: 0 5px 0 auto;
`

export const Section = styled.p`
  color: ${globalStyles.light_font_color};
  font-size: 15px;
  font-family: ${globalStyles.basic_font_family};
  margin-left: 10px;
`

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`

const SubGroupContainer = styled('div')<IActiveNavItem>`
  align-self: flex-end;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({isActive}) => `transition: max-height .5s ${isActive ? 'ease-in' : 'cubic-bezier(0,1,0,1)'};`}
  overflow: hidden;
  ${({isActive}) => `max-height: ${isActive ? 1000 : 0}px;`}
`

const NavItem: React.FC<INavItemProps> = ({icon, name, sub_group, path}) => {
  const {activeNavState, handleSetActiveItem} = useContext(NavContext)

  const renderSubGroup = sub_group ? sub_group.map((item: INavItemSubGroup) => {
    return <NavSubItem key={item.name} {...item} parent={name}/>
  }) : []

  const isActive = activeNavState[name]
  const pathWithChildren = sub_group ? sub_group[0].path : path
  const firstChild = sub_group ? sub_group[0].name : null

  return (
    <>
      <StyledLink to={pathWithChildren}>
        <Container isActive={isActive} onClick={handleSetActiveItem(name, firstChild, null)}>
          <Icon src={icon} alt={`${name} icon`}/>
          <Section>{name}</Section>
          {!sub_group && <Dot isActive={isActive}/>}
          {sub_group && <Chevron isActive={isActive}>&#10095;</Chevron>}
        </Container>
      </StyledLink>
      {sub_group && (
        <SubGroupContainer isActive={isActive}>
          {renderSubGroup}
        </SubGroupContainer>
      )}
    </>
  )
}

export default NavItem
