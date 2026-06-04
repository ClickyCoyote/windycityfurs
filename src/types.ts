import type { IcsEvent } from 'ts-ics'

export type CalendarEvent = IcsEvent & {
  formattedDate: string
}
