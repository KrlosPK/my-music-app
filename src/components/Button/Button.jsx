import styles from './Button.module.css'

const Button = ({ text, isBackground, href, handleClick }) => {
  return (
    <a onClick={handleClick} href={href} className={`login ${styles.button} ${isBackground && styles.bg}`}>
      {text}
    </a>
  )
}

export { Button }
