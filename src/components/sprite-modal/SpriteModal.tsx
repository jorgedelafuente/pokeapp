import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './SpriteModal.module.css'

interface Sprite {
  label: string
  url: string
}

interface Props {
  name: string
  sprites: Sprite[]
  onClose: () => void
}

const SpriteModal = ({ name, sprites, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} sprites`}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name} — all sprites</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className={styles.grid}>
          {sprites.map((s) => (
            <div key={s.label} className={styles.spriteItem}>
              <img src={s.url} alt={s.label} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default SpriteModal
