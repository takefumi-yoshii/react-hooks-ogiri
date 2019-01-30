import * as React from 'react'
import { useContext, useMemo } from 'react'
import { PieChartContext } from '../contexts'
import { Record } from '../records'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  totalPoint: number
  size: number
  padding: number
  progress: number
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  let currentDeg = 0
  return (
    <>
      {props.records
        .map((record, index) => {
          const radius = props.size * 0.5
          const value =
            (record.point / props.totalPoint) *
            99.999 *
            props.progress
          const K = (2 * Math.PI) / (100 / value)
          const x = radius - Math.cos(K) * radius
          const y = radius + Math.sin(K) * radius
          const long = value <= 50 ? 0 : 1
          const T = radius + props.padding
          const M = `${T},${T}`
          const L = `${T},${props.padding}`
          const A = `${radius},${radius}`
          const XY = `${y + props.padding},${x +
            props.padding}`
          const d = `M${M} L${L} A${A} 0 ${long},1 ${XY} z`
          const rotd = `${currentDeg * props.progress}`
          const rotx = `${T}`
          const roty = `${T}`
          const transform = `rotate(${rotd}, ${rotx}, ${roty})`
          const path = (
            <g key={index}>
              <path
                d={d}
                transform={transform}
                filter="url(#drop-shadow)"
              />
              <path
                d={d}
                transform={transform}
                fill={record.color}
                onClick={() => console.log(record.name)}
              />
            </g>
          )
          currentDeg +=
            (360 * record.point) / props.totalPoint
          return path
        })
        .reverse()}
    </>
  )
}
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    records,
    totalPoint,
    size,
    padding,
    progress
  } = useContext(PieChartContext)
  return useMemo(
    () => (
      <View
        records={records}
        totalPoint={totalPoint}
        size={size}
        padding={padding}
        progress={progress}
      />
    ),
    [records, totalPoint, size, padding, progress]
  )
}
