import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Signup } from './components/Signup/Signup'
import { FavoriteSongs } from './components/FavoriteSongs/FavoriteSongs'
import { NotFound } from './components/NotFound'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/my-music-app/' element={<Home />} />
        <Route path='/my-music-app/favorite-songs' element={<FavoriteSongs />} />
        <Route path='/my-music-app/login' element={<Login />} />
        <Route path='/my-music-app/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export { App }
