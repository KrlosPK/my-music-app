import { createContext, useState } from 'react'
import { VITE_SPOTIFY_TOKEN } from '../../config'

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const localStorageToken = window.localStorage.getItem(VITE_SPOTIFY_TOKEN)

  const [token, setToken] = useState(localStorageToken || '')

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext }
