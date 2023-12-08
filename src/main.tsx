import 'react-toastify/dist/ReactToastify.min.css'

import GlobalStyles from 'styles/GlobalStyles'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { router } from 'router'
import { store } from 'store/store'
import { theme } from 'styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
			<ToastContainer autoClose={2000} hideProgressBar />
		</ThemeProvider>
	</Provider>
)
