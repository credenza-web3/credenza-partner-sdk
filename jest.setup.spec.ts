import { config as dotenvConfig } from 'dotenv'

import { useAuth, useEnv, useDebug } from './src/credenza-partner-sdk'

dotenvConfig()

beforeEach(() => {
  useDebug(false)
  useEnv('local')
  useAuth({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
})
