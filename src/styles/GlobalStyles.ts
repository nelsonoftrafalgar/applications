import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.backgrounds.master};
    padding: ${({ theme }) => theme.gridUnit * 5}px;
    height: 100vh;
    font-family: sans-serif;
  }
`

export default GlobalStyles
