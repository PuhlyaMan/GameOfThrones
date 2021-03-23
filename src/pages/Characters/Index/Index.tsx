import React from 'react'
import { Helmet } from 'react-helmet-async'

import s from './Index.module.css'

const Index: React.FC = () => {
  return (
    <div className={s.root}>
      <Helmet>
        <title>Characters</title>
      </Helmet>
      Characters page
    </div>
  )
}

export default Index
