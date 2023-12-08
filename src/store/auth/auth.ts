import { User } from '@supabase/supabase-js'
import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
	token: string | null
	user: User | null
}

const initialState: AuthState = {
	user: null,
	token: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, { payload }) => {
			state.token = payload.token
			state.user = payload.user
		},
		clearCredentials: (state) => {
			state.token = null
			state.user = null
		}
	}
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer
