import 'react-toastify/dist/ReactToastify.min.css'

import { App } from 'App'
import GlobalStyles from 'styles/GlobalStyles'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { store } from 'store/store'
import { theme } from 'styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
			<ToastContainer autoClose={2000} hideProgressBar />
		</ThemeProvider>
	</Provider>
)
