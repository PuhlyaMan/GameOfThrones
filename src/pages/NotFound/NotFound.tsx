import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import s from './NotFound.module.css'

const NotFound: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className={s.root}>
      <Helmet>
        <title>Oops!</title>
      </Helmet>
      Not found page {pathname}
    </div>
  )
}

export default NotFound
