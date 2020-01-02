import React, { useReducer } from 'react'

import Add from './Add'
import { MainContext } from '../context/context'
import {Route} from 'react-router-dom'
import Search from './Search'
import { globalStyles } from '../styles/styles'
import { masterReducer } from '../state/reducers'
import produce from 'immer'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${globalStyles.dark_bg};
`

const initialMainState = {
  search: {
    value: '',
    type: '',
    results: []
  },
  add: {
    company_name: '',
    position_name: '',
    salary_min: 0,
    salary_max: 0,
    application_date: '',
    application_result: '',
    add_status: ''
  }
}

const Main = () => {
  const [state, dispatch] = useReducer(produce(masterReducer), initialMainState)

  const mainContextValue = {dispatch, state}

  return (
    <MainContext.Provider value={mainContextValue}>
      <Container>
        <Route exact={true} path='/'/>
        <Route path='/search' component={Search}/>
        <Route path='/add' component={Add}/>
      </Container>
    </MainContext.Provider>
  )
}

export default Main
