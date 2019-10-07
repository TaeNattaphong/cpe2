const express = require('express')
const app = express()
const port = 15220

app.get('/', (req, res) =>
  res.send('Greetings from mkcookies...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
