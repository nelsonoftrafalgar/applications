import { App } from 'App'
import { Login } from 'components/Login/Login'
import { useAppSelector } from 'store/store'

export const AuthRoute = () => {
	const { user } = useAppSelector(({ auth }) => auth)
	if (!user) {
		return <Login />
	}

	return <App />
}
