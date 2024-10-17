import { addPromoOffer, updatePromoOffer, getPromoOffers, removePromoOffer, checkPromoOffer, getPromoOfferRss } from '.'

let offerId: string

test('Adds promo offer', async () => {
  const result = await addPromoOffer({
    title: 'test',
    description: 'test',
    includeRules: ['1'],
    excludeRules: ['1'],
    code: 'test',
  })
  offerId = result.id
  expect(result.id).toBeDefined()
})

test('Updates promo offer', async () => {
  const result = await updatePromoOffer(offerId, {
    title: 'test1',
    code: 'test1',
    includeRules: ['1', '2'],
    excludeRules: [],
  })
  expect(result).toBeTruthy()
  expect(result.title).toEqual('test1')
  expect(result.code).toEqual('test1')
  expect(result.includeRules).toEqual(['1', '2'])
  expect(result.excludeRules).toEqual([])
})

test('Gets promo offers', async () => {
  const result = await getPromoOffers()
  expect(result).toBeTruthy()
  expect(result.length).toBeGreaterThan(0)
  const item = result.find((v) => v.id === offerId)
  expect(item).toBeTruthy()
})

test('Checks promo offer', async () => {
  const result = await checkPromoOffer(offerId, '1')
  expect(result).toBe(true)
})

test('Gets promo offer RSS', async () => {
  const result = await getPromoOfferRss({
    suiAddress: '0x1',
  })
  expect(result.length).toBe(0)
})

test('Deletes promo offer', async () => {
  const result = await removePromoOffer(offerId)
  expect(result).toBe(true)
})
