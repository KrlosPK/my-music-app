import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <img src='/my-music-app/favicon.ico' alt='Spotify logo' width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link to='/favorite-songs'>Favoritos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
