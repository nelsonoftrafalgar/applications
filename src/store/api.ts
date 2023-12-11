import {
	BaseQueryApi,
	FetchArgs,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { clearCredentials, setCredentials } from './auth/authSlice'

import { LoginResponse } from './auth/types'
import { RootState } from './store'

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		const {
			auth: { accessToken }
		} = getState() as RootState
		headers.set('apiKey', import.meta.env.VITE_API_KEY)
		if (accessToken) {
			headers.set('authorization', `Bearer ${accessToken}`)
		}
		return headers
	}
})

const baseQueryWithRefresh = async (
	args: FetchArgs,
	api: BaseQueryApi,
	extraOptions: object
) => {
	let result = await baseQuery(args, api, extraOptions)

	if (
		result.error?.status === 401 &&
		(result.error.data as { message: string }).message === 'JWT expired'
	) {
		const {
			auth: { refreshToken }
		} = api.getState() as RootState
		const refreshResult = (await baseQuery(
			{
				url: '/auth/v1/token?grant_type=refresh_token',
				method: 'POST',
				body: { refresh_token: refreshToken }
			},
			api,
			extraOptions
		)) as { data: LoginResponse }
		const { access_token, user } = refreshResult.data
		if (user && access_token) {
			api.dispatch(
				setCredentials({
					accessToken: access_token,
					user
				})
			)
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(clearCredentials())
		}
	}

	return result
}

export const api = createApi({
	baseQuery: baseQueryWithRefresh,
	tagTypes: ['Applications', 'BadCompanies'],
	endpoints: () => ({})
})
