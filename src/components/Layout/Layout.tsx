import React from 'react'
import cc from 'classcat'

import Header from './Header/Header'

import s from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <Header />
      <main className={cc([s.main, { [s.top]: true }])}>{children}</main>
    </div>
  )
}

export default Layout
