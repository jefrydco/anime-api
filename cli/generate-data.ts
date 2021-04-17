import { createReadStream } from 'fs'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import { parse } from 'fast-csv'
import sortArray from 'sort-array'

import { getUniqueData, processRow } from '../utils'

import type {
  ProcessedAnimeDatumType,
  UnprocessedAnimeDatumType
} from '../types'

const data: ProcessedAnimeDatumType[] = []
const groups = [
  { name: 'Duration', deep: false },
  { name: 'Genres', deep: true },
  { name: 'Licensors', deep: true },
  { name: 'Producers', deep: true },
  { name: 'Rating', deep: false },
  { name: 'Studios', deep: true },
  { name: 'Type', deep: false }
]

createReadStream(resolve(__dirname, '..', 'data', 'master', 'Anime.csv'))
  .pipe(parse({ headers: true }))
  .on('data', (row: UnprocessedAnimeDatumType) => {
    data.push(processRow(row))
  })
  .on('error', (error) => {
    console.error(error)
  })
  .on('end', (rowCount: number) => {
    console.log(`Parsed ${rowCount} rows`)
    void writeFile(
      resolve(__dirname, '..', 'data', 'master', 'Anime.json'),
      JSON.stringify(
        // FIXME: It throws error on eslint
        // eslint-disable-next-line
        sortArray(data, {
          by: ['MAL_ID']
        }) as ProcessedAnimeDatumType[],
        null,
        2
      )
    )
    void Promise.all(
      groups.map((group) =>
        writeFile(
          resolve(__dirname, '..', 'data', 'individual', `${group.name}.json`),
          JSON.stringify(
            // FIXME: It throws error on eslint
            // eslint-disable-next-line
            sortArray(
              getUniqueData(data, group.name, group.deep)
            ) as ProcessedAnimeDatumType[],
            null,
            2
          )
        )
      )
    )
  })
