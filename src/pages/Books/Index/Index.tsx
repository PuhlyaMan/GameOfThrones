import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { currentData, totalData } from '@app/stores/BooksStore'

import { Pagination } from '@app/components'

import s from './Index.module.css'

const Index: React.FC = () => {
  const currentBooks = useRecoilValue(currentData)
  const tD = useRecoilValue(totalData)

  return (
    <div className={s.root}>
      <Helmet>
        <title>Books</title>
      </Helmet>

      <div className={s.title}>
        <h1>Books</h1>
      </div>

      <div className={s.constrols}></div>

      {currentBooks != null && (
        <div className={s.books}>
          {currentBooks.map((book, index) => {
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
      {currentBooks != null && <Pagination to="books" tD={tD} />}
    </div>
  )
}

export default Index
