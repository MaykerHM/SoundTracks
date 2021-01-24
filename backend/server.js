import express from 'express'
import dotenv from 'dotenv'
import trilhas from './data/db.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/trilhas', (req, res) => {
  res.json(trilhas)
})

app.get('/api/trilhas/:id', (req, res) => {
  const album = trilhas.find((a) => a._id === req.params.id)
  res.json(album)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
