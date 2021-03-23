import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSetRecoilState } from 'recoil'

import { headerState, centerState } from '@app/stores/LayoutStore'

import s from './Index.module.css'

const Index: React.FC = () => {
  const setHeader = useSetRecoilState(headerState)
  const setCenter = useSetRecoilState(centerState)

  useEffect(() => {
    setHeader(false)
    setCenter(true)
    return () => {
      setHeader(true)
      setCenter(false)
    }
  }, [setHeader, setCenter])

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
