const express = require('express')

const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('a Hello Kinsta Private 4.11**')
})
server.get('/proxy-99', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 99_000))
  res.send('done')
})
server.get('/proxy-101', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 101_000))
  res.send('done')
})
server.get('/proxy-120', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 120_000))
  res.send('done')
})
server.get('/proxy-90', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 90_000))
  res.send('done')
})
server.get('/proxy-360', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 360_000))
  res.send('done')
})
const port = process.env.PORT || 8080
server.listen(port, () => {
  setInterval(() => {
    console.log('Pack Demo heartbeat 🧘')
  }, 15000)
  console.log(`Example app 2 YO listening at http://localhost:${port}`)
})
