import joi from 'joi'
import { sortByKeyData } from '../constant'

const stringOptional = joi.string().optional()

export const guardianAnime = joi.object({
  q: joi.string().min(3).optional(),
  sort: joi.string().equal('asc', 'desc').default('asc'),
  sortBy: joi
    .string()
    .equal(...sortByKeyData)
    .default('MAL_ID'),
  page: stringOptional,
  size: stringOptional,
  duration: stringOptional,
  genres: stringOptional,
  licensors: stringOptional,
  producers: stringOptional,
  rating: stringOptional,
  studios: stringOptional,
  type: stringOptional
})
