import styles from "./Pagination.module.css";

interface Props {
  page: number;
  totalPages: number;
  onFirst: () => void;
  onPrev: () => void;
  onPrev10: () => void;
  onNext10: () => void;
  onNext: () => void;
  onLast: () => void;
}

const Pagination = ({ page, totalPages, onFirst, onPrev, onPrev10, onNext10, onNext, onLast }: Props) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onFirst} disabled={page === 1} aria-label="First page">«</button>
      <button onClick={onPrev} disabled={page === 1} aria-label="Previous page">‹</button>
      <button onClick={onPrev10} disabled={page <= 10} aria-label="Back 10 pages">-10</button>
      <span className={styles.pageIndicator}>
        <span className={styles.currentPage}>{page}</span>
        <span className={styles.totalPages}>/ {totalPages}</span>
      </span>
      <button onClick={onNext10} disabled={page > totalPages - 10} aria-label="Forward 10 pages">+10</button>
      <button onClick={onNext} disabled={page === totalPages} aria-label="Next page">›</button>
      <button onClick={onLast} disabled={page === totalPages} aria-label="Last page">»</button>
    </div>
  );
};

export default Pagination;
