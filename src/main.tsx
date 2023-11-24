import { App } from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.ts'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<App />
	</ThemeProvider>
)
