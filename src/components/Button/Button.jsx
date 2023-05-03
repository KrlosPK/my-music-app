import styles from './Button.module.css'

const Button = ({ text, isBackground }) => {
  return (
    <button tabIndex={-1} className={`${styles.button} ${isBackground && styles.bg}`}>
      {text}
    </button>
  )
}

export { Button }
