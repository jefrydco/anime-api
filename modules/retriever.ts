import { VercelRequestQuery } from '@vercel/node'
import { get } from 'dot-prop'

import type { FilterType, SortByType, SortType } from '../types'

export function retrieverAnime(
  reqUrl: VercelRequestQuery
): {
  q: string
  sort: SortType
  sortBy: SortByType
  page: number
  size: number
  filters: FilterType
} {
  const q: string | undefined = get(reqUrl, 'q')
  const sort: SortType = get(reqUrl, 'sort', 'asc')
  const sortBy: SortByType = get(reqUrl, 'sortBy', 'MAL_ID')

  let page = get(reqUrl, 'page', 1) as number | string
  page = typeof page === 'string' ? parseInt(page) : page
  let size = get(reqUrl, 'size', 10) as number | string
  size = typeof size === 'string' ? parseInt(size) : size

  const Duration: string | undefined = get(reqUrl, 'duration')
  const Genres: string | undefined = get(reqUrl, 'genres')
  const Licensors: string | undefined = get(reqUrl, 'licensors')
  const Producers: string | undefined = get(reqUrl, 'producers')
  const Rating: string | undefined = get(reqUrl, 'rating')
  const Studios: string | undefined = get(reqUrl, 'studios')
  const Type: string | undefined = get(reqUrl, 'type')

  return {
    q,
    sort,
    sortBy,
    page,
    size,
    filters: {
      Duration,
      Genres,
      Licensors,
      Producers,
      Rating,
      Studios,
      Type
    } as FilterType
  }
}
