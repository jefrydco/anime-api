import type { MasterReaderResultType, SortByType, SortType } from '../types'

export function sorter(
  list: MasterReaderResultType,
  sort: SortType = 'asc',
  sortBy: SortByType = 'MAL_ID'
): MasterReaderResultType {
  return list.sort((a, z) => {
    if (typeof a[sortBy] === 'string' && typeof z[sortBy] === 'string') {
      return sort === 'asc'
        ? (a[sortBy] as string).localeCompare(z[sortBy] as string)
        : (z[sortBy] as string).localeCompare(a[sortBy] as string)
    }
    return sort === 'asc'
      ? (a[sortBy] as number) - (z[sortBy] as number)
      : (z[sortBy] as number) - (a[sortBy] as number)
  })
}
