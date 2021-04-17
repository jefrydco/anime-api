import { readFile } from 'fs/promises'
import { resolve } from 'path'

import type {
  IndividualReaderResultType,
  IndividualType,
  MasterReaderResultType
} from '../types'

async function reader<T>(type: IndividualType | 'Anime'): Promise<T> {
  return JSON.parse(
    await readFile(
      resolve(
        __dirname,
        '../',
        'data',
        type !== 'Anime' ? 'individual' : 'master',
        `${type}.json`
      )
    ).then((_) => _.toString())
  ) as T
}

export async function invidividualReader(
  individual: IndividualType
): Promise<IndividualReaderResultType> {
  return reader<IndividualReaderResultType>(individual)
}

export async function masterReader(): Promise<MasterReaderResultType> {
  return reader<MasterReaderResultType>('Anime')
}
