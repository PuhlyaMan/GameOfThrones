import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from './layoutSlice'

const store = configureStore({
  reducer: layoutSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
