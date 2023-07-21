import { useEffect, useState, useContext } from 'react'

import { FilledHeart, Heart } from '../Icons'
import { UserContext } from '../../context/UserContext'
import { VITE_LIKED_SONGS_TOKEN, VITE_SPOTIFY_BASE_URL } from '../../../config'
import tracks from '../../jsons/tracks.json'
import styles from './Cards.module.css'

const Cards = ({ isFavoriteTracks = false }) => {
  const { token } = useContext(UserContext)
  const [tracksData, setTracksData] = useState([])

  const getCardData = async () => {
    if (!token) return setTracksData([])

    const tracksIds = tracks.map((track) => track.id).join('%2C')

    fetch(`${VITE_SPOTIFY_BASE_URL}/tracks?ids=${tracksIds}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then(({ tracks }) => {
        const likedSongs = window.localStorage.getItem(VITE_LIKED_SONGS_TOKEN)

        if (likedSongs) {
          const parsedLikedSongs = JSON.parse(likedSongs)

          const newTracks = tracks.map((track) => {
            const likedTrack = parsedLikedSongs.find((likedTrack) => likedTrack.id === track.id)
            return likedTrack || { ...track, is_liked: false }
          })

          window.localStorage.setItem(VITE_LIKED_SONGS_TOKEN, JSON.stringify(newTracks))
          return setTracksData(newTracks)
        }

        const newTracks = tracks.map((track) => ({ ...track, is_liked: false }))
        setTracksData(newTracks)
      })
  }

  const likeSong = (trackId, isLiked) => {
    const newTracks = tracksData.map((track) => {
      if (track.id === trackId) {
        return { ...track, is_liked: isLiked }
      }
      return track
    })

    window.localStorage.setItem(VITE_LIKED_SONGS_TOKEN, JSON.stringify(newTracks))
    setTracksData(newTracks)
  }

  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value)

  useEffect(() => {
    getCardData()
  }, [token])

  // const favoriteTracks = tracksData.filter((track) => track.is_liked)

  // if (favoriteTracks.length === 0 && isFavoriteTracks) {
  //   return <p className={styles.noFavoriteSongs}>Añade canciones a tus favoritos.</p>
  // }
  const filteredTracksData = isFavoriteTracks
    ? tracksData.filter((track) => track.is_liked)
    : tracksData

  if (filteredTracksData.length === 0 && isFavoriteTracks) {
    return <p className={styles.noFavoriteSongs}>Añade canciones a tus favoritos.</p>
  }

  return (
    <>
      {filteredTracksData.map((track) => (
        <div className={styles.cards} key={track.id}>
          <img src={track.album.images[0].url} alt={track.title} />
          <div className={styles.text}>
            <h3>{track.name}</h3>
            <p>
              {addLeadingZero(Math.floor(track.duration_ms / 60000))}:
              {addLeadingZero(Math.floor((track.duration_ms / 1000) % 60))}
            </p>
            <p>{track.artists[0].name}</p>
          </div>
          <a className={`spotify-link ${styles.spotifyLink}`} href={track.uri}>
            Escuchar en Spotify
          </a>
          {!track.is_liked
            ? (
              <button
                className={styles.heartButton}
                onClick={() => likeSong(track.id, true)}
                title='Like button'
                type='button'
              >
                <Heart />
              </button>
              )
            : (
              <button
                className={styles.filledHeartButton}
                onClick={() => likeSong(track.id, false)}
                title='Like button'
                type='button'
              >
                <FilledHeart />
              </button>
              )}
        </div>
      ))}
    </>
  )
}

export { Cards }
