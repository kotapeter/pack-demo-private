const express = require('express')

const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('Hello Kinsta Private 2')
})
server.get('/t', (req, res) => {
  console.log('timeout asd')
})
const port = process.env.PORT || 8080
const s = server.listen(port, () => {
  console.log(`Example app 2 YO listening at http://localhost:${port}`)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  s.close(() => {
    console.log('HTTP server closed')
    process.exit(0)
  })
})
