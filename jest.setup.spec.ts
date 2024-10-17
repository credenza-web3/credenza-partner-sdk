import { config as dotenvConfig } from 'dotenv'

import { useAuth, useEnv, useDebug } from './src/credenza-partner-sdk'
import type { TSdkEnv } from './src/lib/sdk-env'

dotenvConfig()

beforeEach(() => {
  useDebug(false)
  useEnv(process.env.CLIENT_ENV as TSdkEnv)
  useAuth({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
})
