import Flexsearch from 'flexsearch'
import { removeUndefined } from '../utils'

import type { FilterType, ProcessedAnimeDatumType } from '../types'

export async function finder(
  list: ProcessedAnimeDatumType[],
  q = ''
): Promise<ProcessedAnimeDatumType[]> {
  const index = Flexsearch.create<ProcessedAnimeDatumType>({
    doc: {
      id: 'MAL_ID',
      field: ['Name', 'English name']
    }
  })
  list.forEach((item) => {
    index.add(item)
  })
  return index.search(q)
}

export function finderFilters(
  list: ProcessedAnimeDatumType[],
  filters: FilterType
): ProcessedAnimeDatumType[] {
  const availableFilters = removeUndefined(filters)
  return list.filter((item) =>
    Object.entries(availableFilters).every(([key, value]) =>
      Array.isArray(item[key])
        ? (item[key] as string[]).includes(value as string)
        : (item[key] as string) === (value as string)
    )
  )
}
