const toSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())
}

const transform = (input: unknown, transformKeys: typeof toSnakeCase | typeof toCamelCase): unknown => {
  if (Array.isArray(input)) {
    return input.map((item) => transformKeys(item))
  } else if (input !== null && typeof input === 'object') {
    return Object.keys(input).reduce(
      (acc, key) => {
        const transformedKey = transformKeys(key)
        acc[transformedKey] = transformKeys(input[key])
        return acc
      },
      {} as Record<string, unknown>,
    )
  }
  return input
}

export function camelToSnakeCase<T>(obj: T): unknown {
  return transform(obj, toCamelCase)
}

export function snakeToCamelCase<T>(obj: T): unknown {
  return transform(obj, toSnakeCase)
}
