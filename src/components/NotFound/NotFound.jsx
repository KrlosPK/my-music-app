import { Button } from '../Button/Button'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1>Esta página no existe</h1>

      <img src='./error-404.webp' alt='Page not found' width={256} height={256} />

      <Button text='Volver al inicio' isBackground href='/' />
    </section>
  )
}

export { NotFound }
