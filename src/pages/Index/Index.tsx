import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { setLayout, ActionLayout } from '@app/redux/actionCreater'

import s from './Index.module.css'

interface IndexProps {
  setLayout: ({ header, center }: { header: boolean; center: boolean }) => ActionLayout
}

const Index: React.FC<IndexProps> = ({ setLayout }) => {
  useEffect(() => {
    setLayout({ header: false, center: true })
    return () => {
      setLayout({ header: true, center: false })
    }
  }, [setLayout])

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

const mapDispatchToProps = {
  setLayout,
}

export default connect(null, mapDispatchToProps)(Index)
