import { createClient } from 'redis'
import dotenv from 'dotenv'

dotenv.config()

export const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
  },
})

redisClient.on('error', (err) => {
  console.error('Erro ao conectar ao Redis:', err)
})

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect()
    console.log('Conectado ao Redis')
  }
}
