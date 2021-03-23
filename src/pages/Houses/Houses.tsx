import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Index = lazy(async () => await import('./Index/Index'))

const Houses: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  )
}

export default Houses
