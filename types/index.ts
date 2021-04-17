import { sortByKeyData } from '../constant'

export type IndividualType =
  | 'Duration'
  | 'Genres'
  | 'Licensors'
  | 'Producers'
  | 'Rating'
  | 'Studios'
  | 'Type'

export type SortType = 'asc' | 'desc'

export type SortByType = typeof sortByKeyData[number]

export enum PaginationUrlTypeEnum {
  Prev,
  Next,
  Last,
  First
}

export type IndividualReaderResultType = string[]

export type MasterReaderResultType = ProcessedAnimeDatumType[]

export type ReaderResultType =
  | IndividualReaderResultType
  | MasterReaderResultType

export type ApiResponseType = {
  data: ReaderResultType
  total?: number
  page?: number
  size?: number
}

export type ApiResponseWithPaginationType = ApiResponseType & {
  first: string
  last: string
  prev: string
  next: string
}

export type FilterType = {
  Duration?: string | undefined
  Genres?: string | undefined
  Licensors?: string | undefined
  Producers?: string | undefined
  Rating?: string | undefined
  Studios?: string | undefined
  Type?: string | undefined
}

export type AiredDateType = {
  startDate: number
  endDate: number
}

export type PossibleValueType = string | string[] | number | AiredDateType

export type ProcessedAnimeDatumType = {
  MAL_ID: number
  Name: string
  Score: number
  Genres: string[]
  'English name': string
  'Japanese name': string
  Type: string
  Episodes: string
  Aired: AiredDateType
  Premiered: string
  Producers: string[]
  Licensors: string[]
  Studios: string[]
  Source: string
  Duration: string
  Rating: string
  Ranked: number
  Popularity: number
  Members: number
  Favorites: number
  Watching: number
  Completed: number
  'On-Hold': number
  Dropped: number
  'Plan to Watch': number
  'Score-10': number
  'Score-9': number
  'Score-8': number
  'Score-7': number
  'Score-6': number
  'Score-5': number
  'Score-4': number
  'Score-3': number
  'Score-2': number
  'Score-1': number
}

export type UnprocessedAnimeDatumType = {
  MAL_ID: string
  Name: string
  Score: string
  Genres: string
  'English name': string
  'Japanese name': string
  Type: string
  Episodes: string
  Aired: string
  Premiered: string
  Producers: string
  Licensors: string
  Studios: string
  Source: string
  Duration: string
  Rating: string
  Ranked: string
  Popularity: string
  Members: string
  Favorites: string
  Watching: string
  Completed: string
  'On-Hold': string
  Dropped: string
  'Plan to Watch': string
  'Score-10': string
  'Score-9': string
  'Score-8': string
  'Score-7': string
  'Score-6': string
  'Score-5': string
  'Score-4': string
  'Score-3': string
  'Score-2': string
  'Score-1': string
}
