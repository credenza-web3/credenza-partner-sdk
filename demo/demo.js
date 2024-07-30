const { useAuth, useEnv, useDebug } = require('@credenza3/partner-sdk')
//const { requestPassportIdSignature } = require('@credenza3/partner-sdk/api')
//const { getSuiAddress } = require('@credenza3/partner-sdk/sui')
//const { getAccountInfo } = require('@credenza3/partner-sdk/accounts')
//const { addNfcId, removeNfcId, updateNfcId, getNfcId } = require('@credenza3/partner-sdk/api')
//const { getCurrentClientInfo } = require('@credenza3/partner-sdk/accounts') 

async function run() {
  useDebug(true)
  useEnv('local')
  useAuth({
    clientId: '66a36001a7152aa7d6f9e135',
    clientSecret: '3fa1a513d89259f1f29181d9f2688c581cb6e3cef852d44d605350ce4537376f',
  })
  
  // const address = await getEvmAddress('6581c0ce6a82d99c2356db66')
  // console.log(address)
  // const sig = await requestPassportIdSignature('6581c0ce6a82d99c2356db66', 'test')
  // console.log(sig)

  // const addr = await getSuiAddress('6581c0ce6a82d99c2356db66')
  // console.log(addr)
  // const acc = await getAccountInfo('6581c0ce6a82d99c2356db66')
  // console.log(acc)

  // const nfcIdCreated = await getNfcId('123456789')
  // console.log(nfcIdCreated)

  // const client = await getCurrentClientInfo()
  // console.log(client)
  process.exit()
}

void run()
