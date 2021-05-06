import React, { useState } from 'react'
import cc from 'classcat'

import { useAppSelector } from 'hooks/redux'

import Header from './Header/Header'

import s from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  const [scroll, setScroll] = useState(false)
  const { header, center } = useAppSelector((state) => state.layout)

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>): void => {
    if ((e.target as Element).scrollTop > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <div className={s.root}>
      {header && <Header scroll={scroll} />}
      <main onScroll={handleScroll} className={cc([s.main, { [s.center]: center }, { [s.top]: header }])}>
        {children}
      </main>
    </div>
  )
}

export default Layout
