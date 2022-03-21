const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

const port = 4000

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

app.use(cors(corsOptions))
app.use(cookieParser())

app.get('/', (req, res) => {
  const agent = req.header('User-Agent');
  const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
  console.log(agent, ip)
  console.log('Cookies: ', req.cookies)
  res.send('Hello World!')
})

app.get('/token', (req, res) => {
  res
    .cookie('token', 1 , { httpOnly: true })
    .cookie('refresh-token', 2 , { httpOnly: true })
    .send('Get Token!')
})

app.get('/token/refresh', (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.send('Get refresh!')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})