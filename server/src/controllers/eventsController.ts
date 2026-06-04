import { NextFunction, Request, Response } from 'express'
import { getNextEvent as getNextEventService } from '../services/calendar'

// Create an item
export const getNextEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await getNextEventService())
  } catch (error) {
    next(error)
  }
}
