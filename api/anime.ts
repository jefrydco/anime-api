import { VercelRequest, VercelResponse } from '@vercel/node'
import { badRequest, internal } from '@hapi/boom'

import {
  guardianAnime,
  logger,
  masterReader,
  paginator,
  retrieverAnime,
  finder,
  finderFilters,
  responseFormatter,
  sorter
} from '../modules'
import { isAnyValueExists } from '../utils'

import type {
  ApiResponseType,
  ApiResponseWithPaginationType,
  MasterReaderResultType
} from '../types'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  try {
    const { error } = guardianAnime.validate(req.query)
    if (error) {
      return res.send(badRequest(error.message, error))
    }

    const { q, sort, sortBy, page, size, filters } = retrieverAnime(req.query)

    let animeList = await masterReader()

    if (q) {
      animeList = await finder(animeList, q)
    }

    if (isAnyValueExists(filters)) {
      animeList = finderFilters(animeList, filters)
    }

    animeList = sorter(animeList, sort, sortBy)

    const paginatedAnimeList = paginator(
      animeList,
      page,
      size
    ) as MasterReaderResultType

    const response: ApiResponseType = {
      data: paginatedAnimeList,
      total: animeList.length,
      page,
      size
    }

    const responseWithPagination: ApiResponseWithPaginationType = responseFormatter(
      req.url,
      response
    )

    return res.send(responseWithPagination)
  } catch (error) {
    logger.error(error)
    return res.send(internal())
  }
}
