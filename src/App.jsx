import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserContextProvider } from './context/UserContext'

import { FavoriteSongs } from './components/FavoriteSongs/FavoriteSongs'
import { Home } from './components/Home/Home'
import { Navigation } from './components/Navigation/Navigation'
import { NotFound } from './components/NotFound/NotFound'

function App () {
  return (
    <React.StrictMode>
      <UserContextProvider>
        <Navigation />
        <main className='page'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorite-songs' element={<FavoriteSongs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </UserContextProvider>
    </React.StrictMode>
  )
}

export { App }
