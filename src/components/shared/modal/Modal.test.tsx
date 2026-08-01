import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from '@/test/setup'
import Modal from './Modal'

function renderModal(onClose = vi.fn()) {
  return render(
    <Modal title="Test modal" onClose={onClose}>
      <p>Modal content</p>
    </Modal>,
  )
}

describe('Modal', () => {
  it('has no axe violations', async () => {
    renderModal()
    expect(await axe(document.body)).toHaveNoViolations()
  })

  it('renders title and children', () => {
    renderModal()
    expect(screen.getByRole('dialog', { name: /test modal/i })).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
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
    screen.getByRole('dialog').dispatchEvent(new Event('cancel', { bubbles: false }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when the backdrop is clicked', () => {
    const onClose = vi.fn()
    renderModal(onClose)
    const dialog = screen.getByRole('dialog')
    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
