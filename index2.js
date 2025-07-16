const express = require('express')

const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('a Hello Kinsta Private 4.5**')
})
const port = process.env.PORT || 8080
server.listen(port, () => {
  setInterval(() => {
    console.log('Pack Demo heartbeat 🧘')
  }, 15000)
  console.log(`Example app 2 YO listening at http://localhost:${port}`)
})
