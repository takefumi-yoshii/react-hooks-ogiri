import { getDateLabel, times } from '../../utils/index'
// ______________________________________________________
//
// @ Types

type Record = {
  dateLabel: string
  amount: number
}
// ______________________________________________________
//
// @ Mock

const mockRecord = (date: Date, max: number): Record => ({
  dateLabel: getDateLabel(date),
  amount: (max * Math.random()) >> 0
})
const mockRecords = (amount: number, max: number) => {
  let date = new Date()
  return times(amount)
    .map(() => {
      date.setDate(date.getDate() - 1)
      return mockRecord(date, max)
    })
    .reverse()
}
const mockMultipleRecords = (
  count: number,
  columnCount: number,
  max: number
) => {
  return times(count).map(() =>
    mockRecords(columnCount, max)
  )
}
export { Record, mockRecords, mockMultipleRecords }
