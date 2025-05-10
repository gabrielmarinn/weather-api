import { Request, Response } from 'express'
import { fetchWeatherFromAPI } from '../services/weather-service'

export async function getWeather(req: Request, res: Response): Promise<any> {
  const { city } = req.params

  try {
    if (!city) {
      return res.status(400).json({ error: 'Cidade é obrigatória.' })
    }

    const data = await fetchWeatherFromAPI(city)
    return res.json(data)
  } catch (error: any) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'Erro ao buscar dados meteorológicos.' })
  }
}
