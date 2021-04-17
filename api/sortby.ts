import { VercelRequest, VercelResponse } from '@vercel/node'
import { internal } from '@hapi/boom'

import { sortByKeyData } from '../constant'
import { logger } from '../modules'

export default function handler(
  req: VercelRequest,
  res: VercelResponse
): VercelResponse {
  try {
    const response = {
      data: sortByKeyData
    }
    return res.send(response)
  } catch (error) {
    logger.error(error)
    return res.send(internal)
  }
}
