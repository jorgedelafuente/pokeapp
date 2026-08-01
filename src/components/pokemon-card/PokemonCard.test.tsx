import { render, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { Provider } from 'react-redux'
import { axe } from '@/test/setup'
import { server } from '@/test/server'
import { createStore } from '@/store/store'
import PokemonCard from './PokemonCard'

function renderWithStore(ui: React.ReactElement) {
  return render(<Provider store={createStore()}>{ui}</Provider>)
}

describe('PokemonCard', () => {
  it('has no axe violations when loaded', async () => {
    const { container, getByText } = renderWithStore(<PokemonCard id={1} />)
    await waitFor(() => getByText('bulbasaur'))
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations while loading', async () => {
    // Delay the response so the component stays in loading state
    server.use(
      http.get('https://pokeapi.co/api/v2/pokemon/:id', async () => {
        await new Promise(() => {}) // never resolves
      }),
    )
    const { container, getByText } = renderWithStore(<PokemonCard id={1} />)
    await waitFor(() => getByText('Loading...'))
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations on error', async () => {
    server.use(http.get('https://pokeapi.co/api/v2/pokemon/:id', () => HttpResponse.error()))
    const { container, getByText } = renderWithStore(<PokemonCard id={1} />)
    await waitFor(() => getByText('Failed to load #1'))
    expect(await axe(container)).toHaveNoViolations()
  })
})
