import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserContext } from './context/UserContext'

import { FavoriteSongs } from './components/FavoriteSongs/FavoriteSongs'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Navigation } from './components/Navigation/Navigation'
import { NotFound } from './components/NotFound/NotFound'

function App () {
  const { token } = useContext(UserContext)

  if (!token) {
    return (
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite-songs' element={<FavoriteSongs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export { App }
