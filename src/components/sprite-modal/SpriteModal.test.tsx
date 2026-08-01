import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from '@/test/setup'
import SpriteModal from './SpriteModal'

const sprites = [
  { label: 'Front', url: 'https://example.com/front.png' },
  { label: 'Back', url: 'https://example.com/back.png' },
]

function renderModal(onClose = vi.fn()) {
  return render(<SpriteModal name="bulbasaur" sprites={sprites} onClose={onClose} />)
}

describe('SpriteModal', () => {
  it('has no axe violations', async () => {
    renderModal()
    // Portal renders into document.body, so axe the full body
    expect(await axe(document.body)).toHaveNoViolations()
  })

  it('renders the title and all sprites', () => {
    renderModal()
    expect(screen.getByRole('dialog', { name: /bulbasaur — all sprites/i })).toBeInTheDocument()
    expect(screen.getByAltText('Front')).toBeInTheDocument()
    expect(screen.getByAltText('Back')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    renderModal(onClose)
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed', () => {
    const onClose = vi.fn()
    renderModal(onClose)
    // jsdom doesn't fire the native cancel event from keyboard input —
    // dispatch it directly on the dialog to test the onCancel handler
    const dialog = screen.getByRole('dialog')
    dialog.dispatchEvent(new Event('cancel', { bubbles: false }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
