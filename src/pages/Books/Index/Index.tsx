import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Book from 'entities/book'

import s from './Index.module.css'

const Index: React.FC = () => {
  const [books, setBooks] = useState<Book[]>()

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      const { data } = await axios.get<Book[]>('/books')
      console.log(data)
      setBooks(data)
    }

    getBooks().catch((e) => console.error(e))
  }, [])

  return (
    <div className={s.root}>
      <Helmet>
        <title>Books</title>
      </Helmet>

      <div className={s.title}>
        <h1>Books</h1>
      </div>

      <div className={s.constrols}></div>

      {books && (
        <div className={s.books}>
          {books.map((book, index) => {
            return (
              <Link to={(index + 1).toString()} key={book.isbn} className={s.book}>
                <div className={s.name}>{book.name}</div>
                <div className={s.item}>
                  <div className={s.desc}>Authors:</div>
                  {book.authors.map((author) => (
                    <div key={author} className={s.value}>
                      {author}
                    </div>
                  ))}
                </div>
                <div className={s.item}>
                  <div className={s.desc}>Pages:</div>
                  <div className={s.value}>{book.numberOfPages}</div>
                </div>
                <div className={s.item}>
                  <div className={s.desc}>Media type:</div>
                  <div className={s.value}>{book.mediaType}</div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Index
