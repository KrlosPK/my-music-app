import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/my-music-app/'>
              <img src='/favicon.ico' alt='Spotify logo' width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link to='/my-music-app/favorite-songs'>Favoritos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/my-music-app/login'>Log In</Link>
          </li>
          <li>
            <Link to='/my-music-app/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
