import { createContext, useState } from 'react'

const UserContextProvider = ({ children }) => {
  const Context = createContext()
  const [jwt, setJwt] = useState([])

  return <Context.Provider value={{ jwt, setJwt }}>{children}</Context.Provider>
}

export { UserContextProvider }
