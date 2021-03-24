import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Book from 'entities/book'

import s from './Show.module.css'

const Show: React.FC = () => {
  const [book, setBook] = useState<Book>()
  const { id } = useParams()

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      const { data } = await axios.get<Book>(`/books/${id}`)
      console.log(data)
      setBook(data)
    }

    getBooks().catch((e) => console.error(e))
  }, [id])

  return <div className={s.root}>Show page {book?.name}</div>
}

export default Show
