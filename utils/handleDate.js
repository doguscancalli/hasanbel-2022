import { DateTime } from 'luxon'

export const fromAgo = (date) => {
  return DateTime.fromISO(date).toRelative()
}

export const exactDate = (date) => {
  return DateTime.fromISO(date).setLocale('tr').toFormat('dd MMMM yyyy')
}
