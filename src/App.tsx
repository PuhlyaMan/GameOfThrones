import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '@app/components'

const Index = lazy(async () => await import('./pages/Index/Index'))
const Favourites = lazy(async () => await import('./pages/Favourites/Favourites'))
const Books = lazy(async () => await import('./pages/Books/Books'))
const Characters = lazy(async () => await import('./pages/Characters/Characters'))
const Houses = lazy(async () => await import('./pages/Houses/Houses'))
const NotFound = lazy(async () => await import('./pages/NotFound/NotFound'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="books/*" element={<Books />} />
            <Route path="characters/*" element={<Characters />} />
            <Route path="houses/*" element={<Houses />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
