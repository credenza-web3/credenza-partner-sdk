import { deployEvmContract } from '.'
import { disconnectWs } from '@/lib/ws'

test(
  'Deploys EVM contract',
  async () => {
    const result = await deployEvmContract('LoyaltyContract', 80002, ['0xc4F69E4fB203F832616f8CCb134ba25417455039'])
    expect((result as { id: string }).id).toBeTruthy()
  },
  60 * 3 * 1000, // 3 min long running task
)

afterAll(async () => {
  await disconnectWs()
})
