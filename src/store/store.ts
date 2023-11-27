import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { api } from './api'
import { configureStore } from '@reduxjs/toolkit'

export const createStore = () =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware)
	})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
