import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry === undefined) {
    return undefined
  }

  const { comment, ...diaryEntry } = entry
  return diaryEntry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries.map(({ id, date, weather, visibility }) => { return { id, date, weather, visibility } })

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id + 1)),
    ...newDiaryEntry
  }
  diaries.push(newDiary)

  return newDiary
}
