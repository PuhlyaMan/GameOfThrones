import { atom } from 'recoil'

const currentPage = atom({
  key: 'currentPage',
  default: 1,
})

const pageSize = atom({
  key: 'pageSize',
  default: 3,
})

export { currentPage, pageSize }
