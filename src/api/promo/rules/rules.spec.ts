import { addPromoRule, updatePromoRule, getPromoRules, removePromoRule } from './'

let ruleId: string

test('Adds promo rule', async () => {
  const result = await addPromoRule({
    title: 'test',
    description: 'test',
    resourceId: 'test',
    chainType: 'evm',
    chainId: 80002,
    type: 'erc20',
    value: 'test',
  })
  ruleId = result.id
  expect(result.id).toBeDefined()
})

test('Updates promo rule', async () => {
  const result = await updatePromoRule(ruleId, {
    title: 'test1',
    value: 'test1',
  })
  expect(result).toBeTruthy()
  expect(result.title).toEqual('test1')
  expect(result.value).toEqual('test1')
  expect(result.description).toEqual('test')
})

test('Gets promo rules', async () => {
  const result = await getPromoRules()
  expect(result).toBeTruthy()
  expect(result.length).toBeGreaterThan(0)
  const item = result.find((v) => v.id === ruleId)
  expect(item).toBeTruthy()
})

test('Deletes promo rule', async () => {
  const result = await removePromoRule(ruleId)
  expect(result).toBe(true)
})
