import { config as dotenvConfig } from 'dotenv'

import { useAuth, useEnv, useDebug } from './src/credenza-partner-sdk'

dotenvConfig()

beforeAll(() => {
  useDebug(false)
  useEnv('local')
  useAuth({
    clientId: process.env.CLIENT_ID as string,
    clientSecret: process.env.CLIENT_SECRET as string,
  })
})
