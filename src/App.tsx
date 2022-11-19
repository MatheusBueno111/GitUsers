import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProfilesProvider } from './contexts/FavoritesProfilesContext'
import Router from './Router'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProfilesProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </FavoritesProfilesProvider>
    </ThemeProvider>
  )
}
