import { Record } from './records'
import * as styles from '../../styles'
// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
  amount: number
  dateLabel: string
  color: string
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

const colors = [styles.blue, styles.tarcoize, styles.green]

const getChartSrc = (
  records: Record[],
  bound: Bound,
  index: number,
  total: number
) => {
  const count = records.length
  const max = Math.max.apply(
    Math,
    records.map(record => record.amount)
  )
  const startY = bound.height + bound.y
  const chartPoints = records.map((record, _index) => {
    const i = _index + 1
    const x = (bound.width / count) * i + bound.x
    const y = startY - (bound.height * record.amount) / max
    return {
      x,
      y,
      amount: record.amount,
      dateLabel: record.dateLabel,
      color: colors[index]
    }
  })
  const columnWidth = bound.width / count
  const chartColumnWidth = columnWidth / (total + 1)
  return {
    chartPoints,
    chartColumnWidth
  }
}

const getMultipleChartSrc = (
  multipleRecords: Record[][],
  bound: Bound
) => {
  const total = multipleRecords.length
  return multipleRecords.map((records, index) => {
    return getChartSrc(records, bound, index, total)
  })
}

export { getChartSrc, getMultipleChartSrc, Point, Bound }
