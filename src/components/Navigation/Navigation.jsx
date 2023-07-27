import { AiFillHome, AiFillHeart, AiFillGithub } from 'react-icons/ai'
import { useContext, useEffect } from 'react'

import { Button } from '../Button/Button'
import { NavLink } from '../NavLink'
import { UserContext } from '../../context/UserContext'
import { VITE_SPOTIFY_TOKEN } from '../../../config'
import styles from './Navigation.module.css'

const Navigation = () => {
  const { setToken } = useContext(UserContext)

  const logout = () => {
    window.localStorage.removeItem(VITE_SPOTIFY_TOKEN)
    setToken('')
  }

  const useToken = () => {
    const hash = window.location.hash
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
    <header>
      <nav>
        <ul className={styles.header}>
          <li>
            <NavLink to='/' className='flex gap'>
              <img src='/favicon.svg' alt='Spotify logo' width={48} height={48} />
              Playlist Genius
            </NavLink>
          </li>
          <li className='flex'>
            <Button handleClick={logout} text='Cerrar Sesión' isBackground />
          </li>
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

        <section className={styles.register}>
          <article>
            <h3>Escucha música sin límites</h3>
            <p>Selecciona tus canciones favoritas y podrás reproducirlas en cualquier momento.</p>
          </article>
        </section>
      </nav>
    </header>
  )
}

export { Navigation }
