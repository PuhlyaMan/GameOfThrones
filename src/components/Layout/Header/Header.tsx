import React from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={s.root}>
      <Link to="/" className={s.link}>
        Домой
      </Link>
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
    </header>
  )
}

export default Header
