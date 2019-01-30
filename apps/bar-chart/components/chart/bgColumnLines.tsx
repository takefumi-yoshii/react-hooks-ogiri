import * as React from 'react'
import { useContext, useMemo } from 'react'
import { BarChartContext } from '../contexts'
import { Point, Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type LineProps = {
  point: Point
  chartBound: Bound
}
type Props = {
  chartPoints: Point[]
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
        y1={props.chartBound.y}
        x2={props.point.x}
        y2={props.chartBound.y + props.chartBound.height}
        stroke={'rgba(255,255,255,.3)'}
        strokeWidth="1"
        strokeDasharray="2"
      />
    ),
    []
  )

const View: React.FC<Props> = props => (
  <g>
    {props.chartPoints.map((point, index) => (
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
  const { chartPoints, chartBound } = useContext(
    BarChartContext
  )
  return useMemo(
    () => (
      <View
        chartPoints={chartPoints[0]}
        chartBound={chartBound}
      />
    ),
    [chartPoints, chartBound]
  )
}
