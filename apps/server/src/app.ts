import cors from 'cors'
import express from 'express'
import config from '@/utils/config'
import { expressMiddleWare } from '@template/trpc'
import { toNodeHandler, auth } from '@template/auth/server'
import { expressMiddleWareSimple } from '@template/trpc/simp'
import { timingMiddleWare } from '@/middlewares/timing-middleware'

const app = express()

app.use(
  cors({
    origin: config.getConfig('frontendUrl'),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
)

app.all('/api/auth/*splat', timingMiddleWare, toNodeHandler(auth))

app.use('/api/trpc', expressMiddleWareSimple)

app.use(express.json())

app.use('/', (req, res) => {
  res.json({
    message: 'yohh!!!',
  })
})

app.all('/*splat', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  })
})

export default app
