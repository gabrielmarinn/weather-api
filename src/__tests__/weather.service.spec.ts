import axios from 'axios'
import { fetchWeatherFromAPI } from '../services/weather-service'

// Mock do axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Mock do redis
jest.mock('../config/redis.ts', () => {
  return {
    redisClient: {
      get: jest.fn().mockResolvedValue(null),
      setEx: jest.fn().mockResolvedValue(null),
    },
  }
})

describe('fetchWeatherFromAPI', () => {
  it('deve retornar os dados do clima ao chamar a API externa', async () => {
    const mockResponse = {
      data: {
        currentConditions: {
          temp: 25,
          conditions: 'Ensolarado',
          humidity: 55,
        },
      },
    }

    mockedAxios.get.mockResolvedValue(mockResponse)

    const data = await fetchWeatherFromAPI('São Paulo')

    expect(data).toEqual({
      cidade: 'São Paulo',
      temperatura: 25,
      descricao: 'Ensolarado',
      umidade: 55,
    })
  })
})
