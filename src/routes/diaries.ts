import express from 'express'
import * as diaryServices from '../services/diaryServices'
import { newDiaryEntry } from '../types'

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
  const { date, weather, visibility, comment }: newDiaryEntry = req.body
  const newDiaryEntry = diaryServices.addDiary({ date, weather, visibility, comment })
  res.json(newDiaryEntry)
})

export default router
