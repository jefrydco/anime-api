import {
  numberKeyData,
  floatKeyData,
  arrayKeyData,
  separatedDateKeyData
} from '../constant/index'

import type {
  UnprocessedAnimeDatumType,
  ProcessedAnimeDatumType,
  AiredDateType,
  PossibleValueType
} from '../types/index'

export function processRow(
  row: UnprocessedAnimeDatumType
): ProcessedAnimeDatumType {
  return Object.keys(row).reduce((acc, curr) => {
    let value: PossibleValueType = row[curr] as PossibleValueType

    if (numberKeyData.includes(curr)) {
      value = parseInt(value as string)
    }
    if (floatKeyData.includes(curr)) {
      value = parseFloat(value as string)
    }
    if (arrayKeyData.includes(curr)) {
      value = (value as string).split(',').map((_) => _.trim())
    }
    if (separatedDateKeyData.includes(curr)) {
      value = (value as string).split(' to ').reduce(
        (acc, curr, idx) => ({
          ...acc,
          [idx === 0 ? 'startDate' : 'endDate']: new Date(curr).getTime()
        }),
        {} as AiredDateType
      )
    }
    return {
      ...acc,
      [curr]: value
    }
  }, {} as ProcessedAnimeDatumType)
}

export function getUniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export function getUniqueData(
  rows: ProcessedAnimeDatumType[],
  key: string,
  deep = false
): string[] {
  const uniqueData = getUniqueArray<string>(
    rows.map((row) => row[key] as string)
  )
  return deep ? getUniqueArray<string>(uniqueData.flat()) : uniqueData
}
