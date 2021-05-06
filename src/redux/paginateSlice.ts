import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface PaginateState {
  currentPage: number
  pageSize: number
}

const initialState: PaginateState = {
  currentPage: 1,
  pageSize: 3,
}

const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      // return { ...state, currentPage: action.payload }
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
      // return { ...state, pageSize: action.payload }
    },
  },
})

export const { setCurrentPage, setPageSize } = paginateSlice.actions

export const paginate = (state: RootState): PaginateState => state.paginate

export default paginateSlice
