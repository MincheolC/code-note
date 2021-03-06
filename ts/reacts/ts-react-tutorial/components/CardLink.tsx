import styles from '../styles/components/CardLink.module.scss'

interface CardLinkProps {
  href: string
}

const CardLink: React.FC<CardLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className={styles.card}>
      {children}
    </a>
  )
}

export default CardLink
