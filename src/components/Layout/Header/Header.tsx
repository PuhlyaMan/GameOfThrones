import React from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={s.root}>
      <Link to="/" className={s.link}>
        Home
      </Link>
      <Link to="books" className={s.link}>
        Books
      </Link>
      <Link to="characters" className={s.link}>
        Characters
      </Link>
      <Link to="houses" className={s.link}>
        Houses
      </Link>
      <Link to="favourites" className={s.link}>
        Favourites
      </Link>
    </header>
  )
}

export default Header
