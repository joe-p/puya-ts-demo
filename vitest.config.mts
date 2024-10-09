import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'vitest/config'
import { puyaTsTransformer } from '@algorandfoundation/algorand-typescript-testing/test-transformer'

export default defineConfig({
  esbuild: {},
  test: {
    server: {
      deps: {
        inline: [/node_modules/]
      }
    }
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      transformers: {
        before: [puyaTsTransformer],
      },
    }),
  ],
})
