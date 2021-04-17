import { VercelRequest, VercelResponse } from '@vercel/node'
import { internal } from '@hapi/boom'

import { invidividualReader, logger } from '../modules'

import type { ApiResponseType } from '../types'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse> {
  try {
    const response: ApiResponseType = {
      data: await invidividualReader('Duration')
    }
    return res.send(response)
  } catch (error) {
    logger.error(error)
    return res.send(internal())
  }
}
