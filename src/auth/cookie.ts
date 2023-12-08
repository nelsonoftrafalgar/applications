import Cookies from 'js-cookie'

const REFRESH_TOKEN_KEY = 'refresh_token'

export const setRefreshToken = (token: string) => {
	Cookies.set(REFRESH_TOKEN_KEY, token, { expires: 7 })
}

export const getRefreshToken = () => {
	return Cookies.get(REFRESH_TOKEN_KEY)
}
