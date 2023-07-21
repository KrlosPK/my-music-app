import { Cards } from '../Card/Cards'
import { FilledHeart } from '../Icons'
import styles from './FavoriteSongs.module.css'

const FavoriteSongs = () => {
  return (
    <section className={styles.favoriteSongs}>
      <h2 className={styles.title}>
        Canciones Favoritas <FilledHeart />
      </h2>
      <article className={styles.cardsContainer}>
        <Cards isFavoriteTracks />
      </article>
    </section>
  )
}

export { FavoriteSongs }
