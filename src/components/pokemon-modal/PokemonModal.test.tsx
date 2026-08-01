import { render, screen } from '@testing-library/react'
import { axe } from '@/test/setup'
import PokemonModal from './PokemonModal'

const sprites = [
  { label: 'Front', url: 'https://example.com/front.png' },
  { label: 'Back', url: 'https://example.com/back.png' },
]

describe('PokemonModal', () => {
  it('has no axe violations', async () => {
    render(<PokemonModal name="bulbasaur" sprites={sprites} onClose={vi.fn()} />)
    expect(await axe(document.body)).toHaveNoViolations()
  })

  it('renders the pokemon name in the title', () => {
    render(<PokemonModal name="bulbasaur" sprites={sprites} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: /bulbasaur — all sprites/i })).toBeInTheDocument()
  })

  it('renders an image for each sprite', () => {
    render(<PokemonModal name="bulbasaur" sprites={sprites} onClose={vi.fn()} />)
    expect(screen.getByAltText('Front')).toBeInTheDocument()
    expect(screen.getByAltText('Back')).toBeInTheDocument()
  })
})
