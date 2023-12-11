import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { isFulfilled, isRejected } from '@reduxjs/toolkit'
import { renderErrorMessage, renderSuccessMessage } from './messages'

import type { Middleware } from '@reduxjs/toolkit'
import { api } from './api'
import authReducer from './auth/authSlice'
import { configureStore } from '@reduxjs/toolkit'

export const apiLogger: Middleware = () => (next) => (action) => {
	if (isFulfilled(action)) renderSuccessMessage(action.meta.arg.endpointName)
	if (isRejected(action)) renderErrorMessage(action.meta.arg.endpointName)
	return next(action)
}

export const createStore = () =>
	configureStore({
		reducer: {
			auth: authReducer,
			[api.reducerPath]: api.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat([api.middleware, apiLogger])
	})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
