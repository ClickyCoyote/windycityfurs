import dotenv from 'dotenv'

dotenv.config()

interface Config {
  port: number
  nodeEnv: string
  calendarUri: string
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  calendarUri: process.env.CALENDAR_URI || '',
}

export default config
