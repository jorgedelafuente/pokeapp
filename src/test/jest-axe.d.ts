declare module 'jest-axe' {
  import type { AxeResults, RunOptions } from 'axe-core'

  export type JestAxe = (html: Element | string, options?: RunOptions) => Promise<AxeResults>

  export function configureAxe(options?: RunOptions): JestAxe
  export const axe: JestAxe
  export const toHaveNoViolations: {
    toHaveNoViolations: () => { pass: boolean; message: () => string }
  }
}

declare module 'vitest' {
  interface Assertion {
    toHaveNoViolations(): void
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void
  }
}
