import { toSnakeCase, toCamelCase } from '.'

const camelCase = {
  firstKey: [
    {
      secondKey: 'value',
    },
  ],
}

const snakeCase = {
  first_key: [
    {
      second_key: 'value',
    },
  ],
}

test('Updates obj to snake_case', () => {
  const result = toSnakeCase(camelCase)
  expect(result).toEqual(snakeCase)
})

test('Updates obj to camelCase', () => {
  const result = toCamelCase(snakeCase)
  expect(result).toEqual(camelCase)
})

test('Replaces "_id" field', () => {
  const obj = { _id: 1 }
  const result = toCamelCase(obj)
  expect(result).toEqual({ id: 1 })
})
