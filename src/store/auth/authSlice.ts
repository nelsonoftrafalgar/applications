import { AuthState, SetCredentialsPayload } from './types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
	refreshToken: null,
	user: null,
	accessToken: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			state,
			{ payload }: PayloadAction<SetCredentialsPayload>
		) => {
			state.accessToken = payload.accessToken
			state.user = payload.user

			if (payload.refreshToken) {
				state.refreshToken = payload.refreshToken
			}
		},
		clearCredentials: (state) => {
			state.refreshToken = null
			state.accessToken = null
			state.user = null
		}
	}
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer
