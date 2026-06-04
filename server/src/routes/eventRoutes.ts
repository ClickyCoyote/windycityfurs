import { Router } from 'express'
import { getNextEvent } from '../controllers/eventsController'

const router = Router()

router.get('/next', getNextEvent)

export default router
