import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_BASE_URL,
	headers: {
		Authorization: import.meta.env.VITE_AUTH_TOKEN,
		apiKey: import.meta.env.VITE_API_KEY
	}
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })

export const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Applications', 'BadCompanies'],
	endpoints: () => ({})
})
