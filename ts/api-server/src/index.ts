import express from 'express'

const PORT = 8080
const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Welcome to Share Profits API')
})

app.listen(PORT, () => console.log(`Start to listen at ${PORT}`))