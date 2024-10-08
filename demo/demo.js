require('dotenv').config()

const { useAuth, useEnv, useDebug } = require('@credenza3/partner-sdk')
// const { requestPassportIdSignature } = require('@credenza3/partner-sdk/api')
// const { getSuiAddress } = require('@credenza3/partner-sdk/sui')
// const { getAccountInfo } = require('@credenza3/partner-sdk/accounts')
// const { addNfcId, removeNfcId, updateNfcId, getNfcId } = require('@credenza3/partner-sdk/api')
// const { getCurrentClientInfo } = require('@credenza3/partner-sdk/accounts') 
// const { findEvmContracts } = require('@credenza3/partner-sdk/evm')

async function run() {
  useDebug(true)
  useEnv(process.env.CLIENT_ENV || 'local')
  useAuth({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  
  //const address = await getAccountInfo('659d4bdb65b648c56bf3a451')
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

  //const list = await findEvmContracts()
  //console.log(list)

  process.exit()
}

void run()
