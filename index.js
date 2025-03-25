const express = require('express')
console.log(1)
const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('1 Hello Kinsta 555')
})
const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
