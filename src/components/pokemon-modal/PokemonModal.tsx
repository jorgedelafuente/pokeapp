import Modal from '@shared/modal/Modal'
import styles from './PokemonModal.module.css'

interface Sprite {
  label: string
  url: string
}

interface Props {
  name: string
  sprites: Sprite[]
  onClose: () => void
}

const TITLE_ID = 'pokemon-modal-title'

const PokemonModal = ({ name, sprites, onClose }: Props) => (
  <Modal title={`${name} — all sprites`} titleId={TITLE_ID} onClose={onClose}>
    <div className={styles.grid}>
      {sprites.map((s) => (
        <div key={s.label} className={styles.spriteItem}>
          <img src={s.url} alt={s.label} />
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  </Modal>
)

export default PokemonModal
