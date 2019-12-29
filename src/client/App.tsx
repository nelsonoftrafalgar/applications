import {Col, Row} from './grid'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Main from './containers/Main'
import Nav from './containers/Nav'
import React from 'react'
import { globalStyles } from './styles/styles'

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: ${globalStyles.dark_bg};
`
const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const App = () => {
  return (
    <>
      <StyleReset/>
      <Container>
        <Router>
          <Switch>
            <Row>
              <Col size={2}>
                <Nav/>
              </Col>
              <Col size={10}>
                <Main/>
              </Col>
            </Row>
          </Switch>
        </Router>
      </Container>
    </>
  )
}

export default App
