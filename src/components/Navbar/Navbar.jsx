import { AiFillHome, AiFillHeart, AiFillGithub } from 'react-icons/ai'
import styles from './Navbar.module.css'
import { NavLink } from '../NavLink'

const Navbar = () => {
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
            <NavLink to='/login'>Entrar</NavLink>
          </li>
        </ul>
        <ul className={styles.navigation}>
          <li>
            <NavLink to='/'><AiFillHome /> Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/favorite-songs'><AiFillHeart /> Favoritos</NavLink>
          </li>
          <li>
            <a href='https://github.com/KrlosPK/my-music-app' target='_blank' rel='noreferrer'>
              <AiFillGithub /> Repositorio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
