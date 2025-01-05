import moment from 'moment-timezone'

export const getCurrentDate = (format: string): string => {
  return moment()
    .tz(import.meta.env.VITE_TIMEZONE)
    .format(format)
}
