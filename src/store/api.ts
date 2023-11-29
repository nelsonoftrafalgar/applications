import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:3000'
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 })

export const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Applications', 'BadCompanies'],
	endpoints: () => ({})
})
