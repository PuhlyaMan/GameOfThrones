import React from 'react'
import { Helmet } from 'react-helmet-async'

import s from './Favourites.module.css'

const Favourites: React.FC = () => {
  return (
    <div className={s.root}>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      Favourites page
    </div>
  )
}

export default Favourites
