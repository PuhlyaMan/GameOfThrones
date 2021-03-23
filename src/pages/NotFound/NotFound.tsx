import React from 'react'
import { useLocation } from 'react-router-dom'

import s from './NotFound.module.css'

const NotFound: React.FC = () => {
  const { pathname } = useLocation()

  return <div className={s.root}>Not found page {pathname}</div>
}

export default NotFound
