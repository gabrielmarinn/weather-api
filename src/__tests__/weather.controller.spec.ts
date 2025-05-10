import request from 'supertest'
import express from 'express'
import weatherRoutes from '../routes/weather.routes'

const app = express()
app.use(express.json())
app.use('/weather', weatherRoutes)

describe('GET /weather/:city', () => {
  it('deve retornar erro se cidade não for fornecida', async () => {
    const res = await request(app).get('/weather')
    expect(res.statusCode).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})
