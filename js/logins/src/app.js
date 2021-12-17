require('dotenv').config()

const express = require('express')
const app = express()

const authRouter = require('./routes/auth')

app.use(express.json())
app.use(express.static('./public'))
app.use('/auth', authRouter)

const port = process.env.PORT || 3000

app.get('/', (_, res) => res.send('Welcome to Share Profit API!!'))

app.listen(port, () => console.log(`Server is listening on port ${port}`))
