import { AiFillHome, AiFillHeart, AiFillGithub } from 'react-icons/ai'
import styles from './Navigation.module.css'
import { NavLink } from '../NavLink'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const username = 'Carlos'

  return (
    <header>
      <nav>
        <ul className={styles.header}>
          <li>
            <NavLink to='/' className='flex gap'>
              <img src='/my-music-app/favicon.ico' alt='Spotify logo' width={48} height={48} />
              {username}
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'>
              <Button text='Entrar' />
            </NavLink>
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
              Hecho en <a href='https://es.react.dev'>React 18</a>
            </p>
            <span>Por: Carlos Morales</span>
          </footer>
        </ul>
        <section className={styles.register}>
          <article>
            <h3>Escucha música sin límites</h3>
            <p>Regístrate para acceder a canciones ilimitadas y podcasts. No necesitas tarjeta de crédito.</p>
          </article>
          <Link to='/signup'>
            <Button text='Regístrate gratis' isBackground />
          </Link>
        </section>
      </nav>
    </header>
  )
}

export { Navigation }
