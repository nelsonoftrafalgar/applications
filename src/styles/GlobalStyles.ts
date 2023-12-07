import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

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
    font-family: sans-serif;
  }

  .success-message {
    background-color: ${theme.colors.primary.green};
    color: ${theme.colors.fonts.white};
  }

  .error-message {
    background-color: ${theme.colors.primary.red};
    color: ${theme.colors.fonts.white};
  }

  .Toastify__close-button--light {
    color: ${theme.colors.fonts.white};
    opacity: 1;
  }
`

export default GlobalStyles
