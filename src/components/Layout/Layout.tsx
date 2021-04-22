import React, { useState } from 'react'
import cc from 'classcat'
import { connect } from 'react-redux'

import Header from './Header/Header'

import s from './Layout.module.css'

interface LayoutProps {
  header: boolean
  center: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, header, center }) => {
  const [scroll, setScroll] = useState(false)

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

const mapStateToProps = ({ layout }: { layout: { header: boolean; center: boolean } }): LayoutProps => {
  return {
    header: layout.header,
    center: layout.center,
  }
}

export default connect(mapStateToProps)(Layout)
