// ______________________________________________________
//
// @ Types

type Record = {
  color: string
  score: number
  title: string
}
// ______________________________________________________
//
// @ Defaults

const defaultRecords: Record[] = [
  { color: '#ff0079', score: 7, title: 'item A' },
  { color: '#e36dff', score: 5, title: 'item B' },
  { color: '#00b5b5', score: 3, title: 'item C' },
  { color: '#5bcc18', score: 5, title: 'item D' },
  { color: '#ffb100', score: 5, title: 'item E' }
]
// ______________________________________________________
//
// @ Helper

const getRecords = (records = defaultRecords) => {
  const max = Math.max.apply(
    Math,
    records.map(record => record.score)
  )
  return { records, max }
}
// ______________________________________________________
//
// @ exports

export { Record, getRecords }
