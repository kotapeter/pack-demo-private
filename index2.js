const express = require('express')

const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('Hello Kinsta Private 22221')
})
const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`Example app 2 YO listening at http://localhost:${port}`)
})
