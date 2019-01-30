import * as React from 'react'
import { useContext, useMemo } from 'react'
import { BarChartContext } from '../contexts'
import { Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
}
type LineProps = {
  point: Point
  chartBound: Bound
}
type Props = {
  bgRowLinesPoints: Point[]
  chartBound: Bound
  className?: string
}
// ______________________________________________________
//
// @ View

const Line = (props: LineProps) =>
  useMemo(
    () => (
      <line
        x1={props.point.x}
        y1={props.point.y}
        x2={props.point.x + props.chartBound.width}
        y2={props.point.y}
        stroke="rgba(255,255,255,.2)"
        strokeWidth="1"
      />
    ),
    []
  )

const View: React.FC<Props> = props => (
  <g>
    {props.bgRowLinesPoints.map((point, index) => (
      <Line
        key={index}
        point={point}
        chartBound={props.chartBound}
      />
    ))}
  </g>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { chartBound, bgRowLinesPoints } = useContext(
    BarChartContext
  )
  return useMemo(
    () => (
      <View
        bgRowLinesPoints={bgRowLinesPoints}
        chartBound={chartBound}
      />
    ),
    [chartBound, bgRowLinesPoints]
  )
}
