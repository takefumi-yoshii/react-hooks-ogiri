import { Record } from './records'

// ______________________________________________________
//
// @ Types

type LinePoint = {
  x: number
  y: number
}
type RadarPoint = {
  x: number
  y: number
  color: string
}
type ItemPoint = {
  x: number
  y: number
  title: string
  score: number
  color: string
}
// ______________________________________________________
//
// @ Helper

const getChartSrc = (
  records: Record[],
  max: number,
  size: number,
  center: number,
  progress: number,
  itemLabelIeject: number
) => {
  const linesPoints: LinePoint[] = records.map(
    (record, index, src) => {
      const angle = (Math.PI * 2 * index) / src.length
      const dis = size * 0.5
      const x = center + Math.cos(angle - Math.PI / 2) * dis
      const y = center + Math.sin(angle - Math.PI / 2) * dis
      return { x, y, title: record.title }
    }
  )
  const radarPoints: RadarPoint[] = records.map(
    (record, index, src) => {
      const angle = (Math.PI * 2 * index) / src.length
      const dis =
        size * 0.5 * (record.score / max) * progress
      const x = center + Math.cos(angle - Math.PI / 2) * dis
      const y = center + Math.sin(angle - Math.PI / 2) * dis
      return { x, y, color: record.color }
    }
  )
  const itemsPoints: ItemPoint[] = records.map(
    (record, index, src) => {
      const angle = (Math.PI * 2 * index) / src.length
      const dis = size * 0.5 + itemLabelIeject
      const x = center + Math.cos(angle - Math.PI / 2) * dis
      const y = center + Math.sin(angle - Math.PI / 2) * dis
      return {
        x,
        y,
        title: record.title,
        color: record.color,
        score: record.score
      }
    }
  )
  return { linesPoints, radarPoints, itemsPoints }
}
// ______________________________________________________
//
// @ exports

export { getChartSrc, LinePoint, RadarPoint, ItemPoint }
