import React from 'react'
import { Link } from 'react-router-dom'

import s from './Index.module.css'

const Index: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.links}>
        <Link to="books" className={s.link}>
          Книги
        </Link>
        <Link to="characters" className={s.link}>
          Персонажи
        </Link>
        <Link to="houses" className={s.link}>
          Дома/Семьи
        </Link>
        <Link to="favourites" className={s.link}>
          Избранное
        </Link>
      </div>
      <div className={s.histoty}></div>
    </div>
  )
}

export default Index
