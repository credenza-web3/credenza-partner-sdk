import { uploadFile } from '.'

test('Adds promo offer', async () => {
  const jsonString = JSON.stringify({})
  const blob = new Blob([jsonString], { type: 'application/json' })
  const file = new File([blob], `meta.json`, { type: 'application/json' })
  const result = await uploadFile(file)
  expect(result.location).toBeDefined()
})
