import type { Config } from 'jest'
import { resolve } from 'path'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: [resolve(__dirname, 'jest.setup.spec.ts')],
}

export default config
