import type { IcsCalendar } from 'ts-ics'
import { convertIcsCalendar } from 'ts-ics'
import { getTime } from 'date-fns/getTime'

export const getLatestEvents = async () => {
  const response = await fetch(process.env.CALENDAR_URI!)
  if (!response.ok) throw new Error('Failed to fetch')

  const eventsRaw = await response.text()

  const events: IcsCalendar = convertIcsCalendar(undefined, eventsRaw)

  if (events.events === undefined) return []

  return events.events
    .map((e) => ({
      ...e,
      formattedDate: e.start.date.toISOString(),
    }))
    .sort((a, b) => getTime(b.formattedDate) - getTime(a.formattedDate))
}

export const getFutureEvents = async () => {
  const events = await getLatestEvents()

  return events
    .filter((event) => getTime(event.formattedDate) > Date.now())
    .sort((a, b) => getTime(a.formattedDate) - getTime(b.formattedDate))
}

export const getNextEvent = async () => {
  const events = await getFutureEvents()

  return events[0]
}
