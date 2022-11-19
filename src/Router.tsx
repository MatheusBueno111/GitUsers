import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { FavoritesProfilesProvider } from './contexts/FavoritesProfilesContext'
import Favorites from './pages/Favorites'
import { Home } from './pages/Home'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FavoritesProfilesProvider>
            <Home />
          </FavoritesProfilesProvider>
        }
      />
      <Route
        path="/favorites"
        element={
          <FavoritesProfilesProvider>
            <Favorites />
          </FavoritesProfilesProvider>
        }
      />
    </Routes>
  )
}

export default Router
