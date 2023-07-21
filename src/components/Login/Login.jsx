import { Button } from '../Button/Button'
import {
  VITE_CLIENT_ID,
  VITE_REDIRECT_URI,
  VITE_RESPONSE_TYPE,
  VITE_SPOTIFY_AUTH,
  VITE_SPOTIFY_TOKEN
} from '../../../config'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import styles from './Login.module.css'

const Login = () => {
  const { setToken } = useContext(UserContext)

  const loginURL = `${VITE_SPOTIFY_AUTH}?client_id=${VITE_CLIENT_ID}&response_type=${VITE_RESPONSE_TYPE}&redirect_uri=${VITE_REDIRECT_URI}`

  const useToken = () => {
    const { hash } = window.location
    let token = window.localStorage.getItem(VITE_SPOTIFY_TOKEN)

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((el) => el.startsWith('access_token'))
        .split('=')[1]

      window.location.hash = ''

      window.localStorage.setItem(VITE_SPOTIFY_TOKEN, token)
    }

    setToken(token)
  }

  useEffect(() => {
    useToken()
  }, [])

  return (
    <main className={styles.main_login}>
      <h2 className={styles.login__title}>
        Inicia Sesión en <span className={styles.login__spotify}>Spotify</span> para escuchar música
        sin límites
      </h2>

      <Button text='Iniciar Sesión' isBackground href={loginURL} />
    </main>
  )
}

export { Login }
