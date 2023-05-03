import { Cards } from '../Card/Cards'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      <h2 className={styles.title}>Canciones Top</h2>
      <article className={styles.cardsContainer}>
        <Cards />
      </article>
    </section>
  )
}

export { Home }
