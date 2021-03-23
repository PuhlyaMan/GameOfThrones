import { atom } from 'recoil'

const headerState = atom({
  key: 'headerState',
  default: true,
})

const centerState = atom({
  key: 'centerState',
  default: false,
})

export { headerState, centerState }
