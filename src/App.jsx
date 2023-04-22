import { Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Signup } from './components/Signup/Signup'
import { FavoriteSongs } from './components/FavoriteSongs/FavoriteSongs'
import { NotFound } from './components/NotFound/NotFound'

function App () {
  return (
    <UserContextProvider>
      <Navbar />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite-songs' element={<FavoriteSongs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </UserContextProvider>
  )
}

export { App }
