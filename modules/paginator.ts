import type { ReaderResultType } from '../types'

// Taken from: https://stackoverflow.com/a/42761393
export function paginator(
  array: ReaderResultType,
  pageNumber: number,
  pageSize: number
): ReaderResultType {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}
