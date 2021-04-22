import { SET_LAYOUT } from './action'
import { ActionLayout } from './actionCreater'

interface LayoutState {
  header: boolean
  center: boolean
}

const initState: LayoutState = {
  header: true,
  center: false,
}

export const layoutReducer = (state = initState, { type, payload }: ActionLayout): LayoutState => {
  switch (type) {
    case SET_LAYOUT:
      return { ...state, ...payload }
    default:
      return state
  }
}
