import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from './store'
import Book from 'entities/book'

interface BooksState {
  totalData: number
  queryString: string
  currentData: Book[]
}

const initialState: BooksState = {
  totalData: 0,
  queryString: '',
  currentData: [],
}

const getTotalData = createAsyncThunk('books/totalData', async () => {
  const { data } = await axios.get<Book[]>('/books')
  return data.length
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getTotalData.fulfilled]: (state, action: PayloadAction<number>) => {
      console.log(action)
      state.totalData = action.payload
    }
  }
})

export const { setLayout } = booksSlice.actions

export const books = (state: RootState): BooksState => state.books

export default booksSlice
