// ______________________________________________________
//
// @ Types

type Record = {
  color: string
  point: number
  name: string
}
// ______________________________________________________
//
// @ Defaults

const defaultRecords: Record[] = [
  { color: '#742d76', point: 434, name: 'A' },
  { color: '#00b5b5', point: 783, name: 'B' },
  { color: '#ffb100', point: 1083, name: 'C' },
  { color: '#ff0079', point: 1883, name: 'D' }
]
// ______________________________________________________
//
// @ Helper

const getRecords = (records = defaultRecords) => {
  const sortedRecords = records.sort((a, b) =>
    a.point > b.point ? -1 : 1
  )
  const totalPoint = records
    .map(record => record.point)
    .reduce((prev, current) => prev + current)
  return {
    records: sortedRecords,
    totalPoint
  }
}
// ______________________________________________________
//
// @ exports

export { Record, getRecords }
