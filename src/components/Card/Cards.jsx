import { useEffect, useState } from 'react'
import { FilledHeart, Heart } from '../Icons'
import { VITE_JSONPLACEHOLDER_BASE_URL, VITE_UNAVATAR_BASE_URL } from '../../../config'
import styles from './Cards.module.css'

const Cards = () => {
  const [cardData, setCardData] = useState([])
  const [likedSong, setLikedSong] = useState(false)
  const [cardImage, setCardImage] = useState([])

  const getCardData = async () => {
    fetch(`${VITE_JSONPLACEHOLDER_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setCardData(data))
  }
  const getCardImage = async (user) => {
    fetch(`${VITE_UNAVATAR_BASE_URL}/github/${user}`)
      .then(({ url }) => setCardImage(url))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getCardData()
    getCardImage('krlospk')
  }, [])

  const likeSong = () => {
    setLikedSong(!likedSong)
  }

  return (
    <>
      {cardData &&
        cardData.slice(0, 9).map((card) => (
          <div className={styles.cards} key={card.id}>
            <img src={cardImage} alt={card.title} />

            <div className={styles.text}>
              <h3>{card.title}</h3>

              <p>{card.body}</p>
            </div>

            {!likedSong
              ? (
                <button onClick={likeSong} className={styles.heartButton}>
                  <Heart />
                </button>
                )
              : (
                <button onClick={likeSong} className={styles.filledHeartButton}>
                  <FilledHeart />
                </button>
                )}
          </div>
        ))}
    </>
  )
}

export { Cards }
