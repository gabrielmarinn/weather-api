import axios from 'axios'
import dotenv from 'dotenv'
import { redisClient } from '../config/redis'

dotenv.config()

const API_KEY = process.env.WEATHER_API_KEY
const BASE_URL = process.env.WEATHER_API_BASE_URL
const CACHE_TTL = Number(process.env.CACHE_TTL) || 43200

export async function fetchWeatherFromAPI(city: string) {
  const cacheKey = `weather:${city.toLowerCase()}`

  //Verifica se ja tem no cache
  const cached = await redisClient.get(cacheKey)
  if (cached) {
    console.log('Cache hit')
    return JSON.parse(cached)
  }

  //Se nao chama a API externa
  console.log('Cache miss -- buscando API externa')
  const url = `${BASE_URL}/${encodeURIComponent(
    city
  )}?unitGroup=metric&key=${API_KEY}&include=current`
  const response = await axios.get(url)

  return {
    cidade: city,
    temperatura: response.data.currentConditions.temp,
    descricao: response.data.currentConditions.conditions,
    umidade: response.data.currentConditions.humidity,
  }
}
