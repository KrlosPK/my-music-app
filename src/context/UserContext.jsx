import { createContext, useState } from 'react'

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const localStorageToken = window.localStorage.getItem('__my_music_app_token__')

  const [token, setToken] = useState(localStorageToken || '')

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext }
