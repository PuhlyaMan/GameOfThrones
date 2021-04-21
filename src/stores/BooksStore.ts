import { selector } from 'recoil'
import querystring from 'querystring'
import axios from 'axios'
import { currentPage, pageSize } from './PaginateStore'

import Book from 'entities/book'

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

export { totalData, queryString, currentData }
