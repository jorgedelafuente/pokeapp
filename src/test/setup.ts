import '@testing-library/jest-dom'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import { server } from './server'

expect.extend(toHaveNoViolations)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export const axe = configureAxe({
  rules: {
    // Disable color-contrast in jsdom — it can't compute real styles
    'color-contrast': { enabled: false },
  },
})
