import { config as dotenvConfig } from 'dotenv'

import { useAuth, useEnv, useDebug } from './src/credenza-partner-sdk'

dotenvConfig()

beforeAll(() => {
  const clientId = process.env.CLIENT_ID as string
  const clientSecret = process.env.CLIENT_SECRET as string
  if (!clientId || !clientSecret) throw new Error('Missing credentials')

  useDebug(false)
  useEnv('local')
  useAuth({ clientId, clientSecret })
})
