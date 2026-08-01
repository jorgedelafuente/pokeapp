import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

interface Props {
  title: string
  titleId?: string
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ title, titleId = 'modal-title', onClose, children }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    document.body.style.overflow = 'hidden'

    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) onClose()
    }
    dialog?.addEventListener('click', onBackdropClick)

    return () => {
      dialog?.removeEventListener('click', onBackdropClick)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault()
    onClose()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      onCancel={handleCancel}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>,
    document.body,
  )
}

export default Modal
