import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface LayoutState {
  header: boolean
  center: boolean
}

const initialState: LayoutState = {
  header: true,
  center: false,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<LayoutState>) => {
      state.center = action.payload.center
      state.header = action.payload.header
      // return { ...state, ...action.payload }
    },
  },
})

export const { setLayout } = layoutSlice.actions

export const layout = (state: RootState): LayoutState => state

export default layoutSlice
