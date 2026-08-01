import Pagination from '@/components/pagination/Pagination'
import styles from './Header.module.css'

interface Props {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

const Header = ({ page, totalPages, onChange }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.headerImage}>
          <img loading="lazy" src={`${import.meta.env.BASE_URL}images/poke-icon.png`} />
        </div>
        <div className={styles.headerLogo}>
          <img loading="lazy" src={`${import.meta.env.BASE_URL}images/poke-logo.jpg`} />
        </div>
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination page={page} totalPages={totalPages} onChange={onChange} />
      </div>
      <div className={styles.spacer} />
    </header>
  )
}

export default Header
