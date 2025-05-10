import { Router } from 'express'
import { getWeather } from '../controllers/weather.controller'

const router = Router()

router.get('/:city', getWeather)

export default router
