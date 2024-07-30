import {useAuth, useEnv} from './dist'
import { requestPassportIdSignature } from './dist/general'

async function run() {
  useEnv('local')
  useAuth({
    clientId: '66a36001a7152aa7d6f9e135',
    clientSecret: '3fa1a513d89259f1f29181d9f2688c581cb6e3cef852d44d605350ce4537376f',
  })
  // const address = await getEvmAddress('6581c0ce6a82d99c2356db66')
  // console.log(address)
  const sig = await requestPassportIdSignature('6581c0ce6a82d99c2356db66', 'sign this message')
  console.log(sig)
  process.exit()
}

run()