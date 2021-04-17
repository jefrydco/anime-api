import is from '@sindresorhus/is'

export function removeUndefined(
  object: Record<string, unknown>
): Record<string, unknown> {
  return Object.keys(object).reduce(
    (acc, key) =>
      object[key] === undefined ? { ...acc } : { ...acc, [key]: object[key] },
    {} as Record<string, unknown>
  )
}

export function isAnyValueExists(object: Record<string, unknown>): boolean {
  return Object.entries(object).some(([_, value]) => is.truthy(value))
}
