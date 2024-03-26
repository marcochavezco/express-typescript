import express from 'express'
import * as diaryServices from '../services/diaryServices'
import { newDiaryEntry } from '../types'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  if (diary === undefined) {
    return res.status(404).json({ message: 'Diary not found.' })
  }

  return res.json(diary)
})

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const addedDiaryEntry: newDiaryEntry = toNewDiaryEntry(req.body)

    const newDiaryEntry = diaryServices.addDiary(addedDiaryEntry)

    res.json(newDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
