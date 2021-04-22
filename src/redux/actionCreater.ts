import { SET_LAYOUT } from './action'

export interface ActionLayout {
  type: string
  payload: {
    header: boolean
    center: boolean
  }
}

export const setLayout = ({ header, center }: { header: boolean; center: boolean }): ActionLayout => {
  return {
    type: SET_LAYOUT,
    payload: { header, center },
  }
}
