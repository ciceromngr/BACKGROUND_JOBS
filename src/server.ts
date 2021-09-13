import express from 'express'
import UserController from './app/controller/UserController'

const app = express()

app.post('/users', UserController.store)

app.listen(3333, () => console.log("server running on localhost: 3333"))