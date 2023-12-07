import { App } from 'App'
import GlobalStyles from 'styles/GlobalStyles'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { store } from 'store/store'
import { theme } from 'styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</Provider>
)
