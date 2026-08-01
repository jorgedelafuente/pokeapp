import 'vitest'
import type { AxeResults, RunOptions, Spec, ImpactValue } from 'axe-core'

declare module 'vitest' {
  interface Assertion {
    toHaveNoViolations(): void
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void
  }
}

declare module 'jest-axe' {
  export interface JestAxeConfigureOptions extends RunOptions {
    globalOptions?: Spec
    impactLevels?: ImpactValue[]
  }

  export type JestAxe = (html: Element | string, options?: RunOptions) => Promise<AxeResults>

  export function configureAxe(options?: JestAxeConfigureOptions): JestAxe
  export const axe: JestAxe
  export const toHaveNoViolations: {
    toHaveNoViolations: () => { pass: boolean; message: () => string }
  }
}
