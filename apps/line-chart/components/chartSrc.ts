import { Record } from './records'

// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
  amount: number
  dateLabel: string
  current: boolean
}
type Bound = {
  x: number
  y: number
  width: number
  height: number
}
// ______________________________________________________
//
// @ Helper

const getChartSrc = (records: Record[], bound: Bound) => {
  const count = records.length
  const max = Math.max.apply(
    Math,
    records.map(record => record.amount)
  )
  const startY = bound.height + bound.y
  const paths: string[] = []
  const chartPoints = records.map((record, index) => {
    const i = index + 1
    const x = (bound.width / count) * i + bound.x
    const y = startY - (bound.height * record.amount) / max
    paths.push(`${x},${y}`)
    return {
      x,
      y,
      amount: record.amount,
      dateLabel: record.dateLabel,
      current: false
    }
  })
  return {
    chartPoints,
    chartPath: paths.join(' '),
    chartColumnWidth: bound.width / count
  }
}

export { getChartSrc, Point, Bound }
