import 'dotenv/config'
import express from 'express'
import UserController from './app/controller/UserController'

const app = express()

app.use(express.json())
app.post('/users', UserController.store)
app.post('/admin/queue') // Criar a rota de queues com o bull-board

app.listen(process.env.SERVER_PORT, () => console.log(`server running on localhost: ${process.env.SERVER_PORT}`))