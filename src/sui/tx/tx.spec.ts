import { signSponsoredTransaction } from '.'

test('Must get signer signature for sponsored tx', async () => {
  const result = await signSponsoredTransaction(new Uint8Array([1, 2, 3]))
  expect(result?.signature?.length).toBe(1)
  expect(result?.bytes).toBeDefined()
})
