import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { createBrowserHistory } from 'history'
import rootReducer from './root-reducer'

export const history = createBrowserHistory()

const store = configureStore({
    reducer: rootReducer(history),
    // middleware: getDefaultMiddleware => getDefaultMiddleware(), // .prepend(middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export default store