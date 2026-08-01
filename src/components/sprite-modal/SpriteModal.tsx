import { useEffect, useRef } from 'react'
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

const TITLE_ID = 'sprite-modal-title'

const SpriteModal = ({ name, sprites, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    document.body.style.overflow = 'hidden'

    // Close on backdrop click (target is the dialog element itself, not its children)
    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) onClose()
    }
    dialog?.addEventListener('click', onBackdropClick)

    return () => {
      dialog?.removeEventListener('click', onBackdropClick)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Intercept native Escape so React controls unmounting
  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault()
    onClose()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={TITLE_ID}
      onCancel={handleCancel}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 id={TITLE_ID} className={styles.title}>
            {name} — all sprites
          </h2>
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
    </dialog>,
    document.body,
  )
}

export default SpriteModal
