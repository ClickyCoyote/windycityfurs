import express from 'express'
import { errorHandler } from './middlewares/errorHandler'
import eventRoutes from './routes/eventRoutes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// Routes
app.use('/api/events', eventRoutes)

// Global error handler (should be after routes)
app.use(errorHandler)

export default app
