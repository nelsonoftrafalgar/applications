import Add from './Add'
import React from 'react'
import {Route} from 'react-router-dom'
import Search from './Search'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${globalStyles.dark_bg};
`

const Main = () => {
  return (
    <Container>
      <Route exact={true} path='/'/>
      <Route path='/search' component={Search}/>
      <Route path='/add' component={Add}/>
    </Container>
  )
}

export default Main
