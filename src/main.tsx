import { App } from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.ts'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { store } from './store/store.ts'
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</Provider>
)
