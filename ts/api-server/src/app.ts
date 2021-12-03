import express from 'express'
import bodyParser from 'body-parser'

// Controllers
import * as userController from './controller/user';

const app = express()

// Express Configuration
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Welcome to Share Profits API')
})
app.post('/signup', userController.createUser)
app.get('/me', userController.getUser)

export default app;