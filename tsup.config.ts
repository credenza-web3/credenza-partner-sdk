import { Options } from 'tsup'

const defaultOptions: Options = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
  target: 'es6',
  esbuildOptions: (options, context) => {
    if (context.format === 'esm') {
      options.packages = 'external'
    }
  },
}
export default defaultOptions
