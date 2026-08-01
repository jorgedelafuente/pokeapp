import styles from './Pagination.module.css'

interface Props {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

const Pagination = ({ page, totalPages, onChange }: Props) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.controls}>
        <button onClick={() => onChange(1)} disabled={page === 1} aria-label="First page">
          «
        </button>
        <button
          onClick={() => onChange(Math.max(1, page - 10))}
          disabled={page <= 10}
          aria-label="Back 10 pages"
        >
          -10
        </button>
        <button onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page">
          ‹
        </button>
      </div>
      <span className={styles.pageIndicator}>
        <span className={styles.currentPage}>{page}</span>
        <span className={styles.totalPages}>/ {totalPages}</span>
      </span>
      <div className={styles.controls}>
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          ›
        </button>
        <button
          onClick={() => onChange(Math.min(totalPages, page + 10))}
          disabled={page > totalPages - 10}
          aria-label="Forward 10 pages"
        >
          +10
        </button>
        <button
          onClick={() => onChange(totalPages)}
          disabled={page === totalPages}
          aria-label="Last page"
        >
          »
        </button>
      </div>
    </div>
  )
}

export default Pagination
