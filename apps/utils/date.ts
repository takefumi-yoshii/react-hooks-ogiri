import { padddingZero } from './string'

export const getTimeLabel = (date: Date) => {
  const hour = padddingZero(date.getHours(), 2)
  const minute = padddingZero(date.getMinutes(), 2)
  const second = padddingZero(date.getSeconds(), 2)
  return `${hour}:${minute}:${second}`
}

export const getDateLabel = (date: Date) => {
  const hour = padddingZero(date.getFullYear(), 4)
  const minute = padddingZero(date.getMonth() + 1, 2)
  const second = padddingZero(date.getDate(), 2)
  return `${hour}/${minute}/${second}`
}
