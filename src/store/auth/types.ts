import { Session, User } from '@supabase/supabase-js'

export interface LoginResponse extends Session {
	user: User
}

export interface AuthState {
	refreshToken: string | null
	accessToken: string | null
	user: User | null
}

export interface SetCredentialsPayload {
	accessToken: string
	user: User
	refreshToken?: string
}
