import '@testing-library/jest-dom'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import { server } from './server'

expect.extend(toHaveNoViolations)

// jsdom doesn't implement showModal/close — mock them and sync the open attribute
// so Testing Library can see dialog contents via accessible roles
HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
  this.setAttribute('open', '')
})
HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
  this.removeAttribute('open')
})

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export const axe = configureAxe({
  rules: {
    // Disable color-contrast in jsdom — it can't compute real styles
    'color-contrast': { enabled: false },
  },
})
