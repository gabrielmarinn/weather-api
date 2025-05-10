import { Router } from 'express'
import { getWeather } from '../controllers/weather.controller'

const router = Router()

router.get('/:city', getWeather)

router.get('/', (req, res) => {
  res
    .status(400)
    .json({ error: 'Parâmetro de cidade é obrigatório. Use /weather/:city' })
})

export default router
