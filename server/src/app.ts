import express from 'express'
import { errorHandler } from './middlewares/errorHandler'
import eventRoutes from './routes/eventRoutes'
import cors from 'cors'
import { logger } from './middlewares/logger'

const app = express()

app.use(express.json())
app.use(cors())

// Middleware
app.use(logger)

// Routes
app.use('/api/events', eventRoutes)

// Global error handler (should be after routes)
app.use(errorHandler)

export default app
