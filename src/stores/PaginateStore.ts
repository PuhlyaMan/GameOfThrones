import { atom, selector } from 'recoil'
import querystring from 'querystring'
import axios from 'axios'

import Book from 'entities/book'

const currentPage = atom({
  key: 'currentPage',
  default: 1,
})

const pageSize = atom({
  key: 'pageSize',
  default: 3,
})

const totalData = selector({
  key: 'totalData',
  get: async () => {
    const { data } = await axios.get<Book[]>('/books')
    return data.length
  },
})

const queryString = selector({
  key: 'queryString',
  get: ({ get }) => {
    const cP = get(currentPage)
    const pS = get(pageSize)
    return `?${querystring.stringify({ page: cP, pageSize: pS })}`
  },
})

const currentData = selector({
  key: 'currentData',
  get: async ({ get }) => {
    const qs = get(queryString)
    const { data } = await axios.get<Book[]>(`/books${qs}`)
    return data
  },
})

export { currentPage, pageSize, totalData, queryString, currentData }
