import { AiFillHome, AiFillHeart, AiFillGithub } from 'react-icons/ai'
import styles from './Navigation.module.css'
import { NavLink } from '../NavLink'
import { Button } from '../Button/Button'
import {
  VITE_CLIENT_ID,
  VITE_REDIRECT_URI,
  VITE_RESPONSE_TYPE,
  VITE_SPOTIFY_AUTH
} from '../../../config'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [spotifyToken, setSpotifyToken] = useState('')

  const username = 'Carlos'
  const loginURL = `${VITE_SPOTIFY_AUTH}?client_id=${VITE_CLIENT_ID}&response_type=${VITE_RESPONSE_TYPE}&redirect_uri=${VITE_REDIRECT_URI}`

  const logout = () => {
    window.localStorage.removeItem('__my_music_app_token__')
    setSpotifyToken('')
  }

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('__my_music_app_token__')

    console.log(!token && hash)

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((el) => el.startsWith('access_token'))
        .split('=')[1]

      setSpotifyToken(token)

      window.location.hash = ''

      window.localStorage.setItem('__my_music_app_token__', token)
    }
  }, [])

  return (
    <header>
      <nav>
        <ul className={styles.header}>
          <li>
            <NavLink to='/' className='flex gap'>
              <img src='/favicon.ico' alt='Spotify logo' width={48} height={48} />
              {username}
            </NavLink>
          </li>
          {!spotifyToken && (
            <li className='flex'>
              <Button href={loginURL} text='Entrar' isBackground />
            </li>
          )}

          {spotifyToken && (
            <li className='flex'>
              <Button handleClick={logout} text='Cerrar Sesión' isBackground />
            </li>
          )}
        </ul>

        <ul className={styles.navigation}>
          <li>
            <NavLink to='/'>
              <AiFillHome /> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/favorite-songs'>
              <AiFillHeart /> Favoritos
            </NavLink>
          </li>
          <li>
            <a href='https://github.com/KrlosPK/my-music-app' target='_blank' rel='noreferrer'>
              <AiFillGithub /> Repositorio
            </a>
          </li>
          <footer className={styles.footer}>
            <h2>My Music App</h2>
            <p>
              Hecho en{' '}
              <a href='https://es.react.dev' target='_blank' rel='noreferrer'>
                React 18
              </a>
            </p>
            <span>
              Por: <strong>Carlos Morales</strong>
            </span>
          </footer>
        </ul>

        {!spotifyToken
          ? (
            <section className={styles.register}>
              <article>
                <h3>Escucha música sin límites</h3>
                <p>
                  Regístrate para acceder a canciones ilimitadas y podcasts. No necesitas tarjeta de
                  crédito.
                </p>
              </article>
              <Button href={loginURL} text='Únete ahora' isBackground />
            </section>
            )
          : (
            <section className={styles.register}>
              <article>
                <h3>Escucha música sin límites</h3>
                <p>Selecciona tus canciones favoritas y podrás reproducirlas en cualquier momento.</p>
              </article>
            </section>
            )}
      </nav>
    </header>
  )
}

export { Navigation }
