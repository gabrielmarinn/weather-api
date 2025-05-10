import express from 'express'
import dotenv from 'dotenv'
import weatherRoutes from './routes/weather.routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/weather', weatherRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
