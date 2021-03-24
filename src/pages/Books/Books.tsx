import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Index = lazy(async () => await import('./Index/Index'))
const Show = lazy(async () => await import('./Show/Show'))

const Books: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path=":id" element={<Show />} />
    </Routes>
  )
}

export default Books
