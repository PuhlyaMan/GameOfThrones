import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import s from './Index.module.css'

const Index: React.FC = () => {
  return (
    <div className={s.root}>
      <Helmet>
        <title>Game of Thrones</title>
      </Helmet>
      <div className={s.links}>
        <Link to="books" className={s.link}>
          Books
        </Link>
        <Link to="characters" className={s.link}>
          Characters
        </Link>
        <Link to="houses" className={s.link}>
          Houses
        </Link>
      </div>
      <div className={s.histoty}></div>
    </div>
  )
}

export default Index
