import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { RootState } from './store'

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token
		headers.set('apiKey', import.meta.env.VITE_API_KEY)
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers
	}
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })

export const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Applications', 'BadCompanies'],
	endpoints: () => ({})
})
