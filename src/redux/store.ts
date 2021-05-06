import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from './layoutSlice'
import paginateSlice from './paginateSlice'
import booksSlice from './booksSlice'

const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer,
    paginate: paginateSlice.reducer,
    books: booksSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
