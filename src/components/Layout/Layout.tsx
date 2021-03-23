import React from 'react'
import cc from 'classcat'
import { useRecoilValue } from 'recoil'

import { headerState, centerState } from '@app/stores/LayoutStore'

import Header from './Header/Header'

import s from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  const header = useRecoilValue(headerState)
  const center = useRecoilValue(centerState)

  return (
    <div className={s.root}>
      {header && <Header />}
      <main className={cc([s.main, { [s.center]: center }, { [s.top]: header }])}>{children}</main>
    </div>
  )
}

export default Layout
