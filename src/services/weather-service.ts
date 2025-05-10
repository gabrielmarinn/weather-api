import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.WEATHER_API_KEY
const BASE_URL = process.env.WEATHER_API_BASE_URL

export async function fetchWeatherFromAPI(city: string) {
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
