import { parseUrl, stringifyUrl } from 'query-string'

import { PaginationUrlTypeEnum } from '../types'

import type { ApiResponseType, ApiResponseWithPaginationType } from '../types'

function getPaginationUrlType(
  type: PaginationUrlTypeEnum,
  url: string,
  apiResponse: ApiResponseType
): string {
  const { url: parsedUrl, query } = parseUrl(url)
  const last = Math.ceil(apiResponse.total / apiResponse.size)
  const parsedUrlWithoutPrefix = parsedUrl.replace('/api', '')

  if (type === PaginationUrlTypeEnum.First) {
    if (apiResponse.total > apiResponse.size) {
      return stringifyUrl({
        url: parsedUrlWithoutPrefix,
        query: {
          ...query,
          page: '1'
        }
      })
    }
    return null
  }
  if (type === PaginationUrlTypeEnum.Last) {
    if (apiResponse.total > apiResponse.size) {
      return stringifyUrl({
        url: parsedUrlWithoutPrefix,
        query: {
          ...query,
          page: `${last}`
        }
      })
    }
    return null
  }
  if (type === PaginationUrlTypeEnum.Prev) {
    if (apiResponse.page > 1) {
      return stringifyUrl({
        url: parsedUrlWithoutPrefix,
        query: {
          ...query,
          page: `${apiResponse.page - 1}`
        }
      })
    }
    return null
  }
  if (type === PaginationUrlTypeEnum.Next) {
    if (apiResponse.page < last) {
      return stringifyUrl({
        url: parsedUrlWithoutPrefix,
        query: {
          ...query,
          page: `${apiResponse.page + 1}`
        }
      })
    }
    return null
  }

  return null
}

export function responseFormatter(
  url: string,
  apiResponse: ApiResponseType
): ApiResponseWithPaginationType {
  return {
    ...apiResponse,
    first: getPaginationUrlType(PaginationUrlTypeEnum.First, url, apiResponse),
    last: getPaginationUrlType(PaginationUrlTypeEnum.Last, url, apiResponse),
    prev: getPaginationUrlType(PaginationUrlTypeEnum.Prev, url, apiResponse),
    next: getPaginationUrlType(PaginationUrlTypeEnum.Next, url, apiResponse)
  }
}
