import { LoginFormData } from 'components/Login/types'
import { LoginResponse } from './types'
import { api } from 'store/api'

export const authApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginFormData>({
			query: (credentials) => ({
				url: '/auth/v1/token?grant_type=password',
				method: 'POST',
				body: credentials
			})
		})
	})
})

export const { useLoginMutation } = authApiSlice
