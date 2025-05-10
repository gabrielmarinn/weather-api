import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.end('API Meteorologica esta funcionando...')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
