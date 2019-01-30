import * as React from 'react'
import { useContext, useMemo } from 'react'
import * as styles from '../../../styles'
import { LineChartContext } from '../contexts'
import { Point, Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  chartPoints: Point[]
  chartBound: Bound
  className?: string
}
type LineProps = {
  point: Point
  chartBound: Bound
  current: boolean
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
        stroke={
          props.point.current
            ? styles.blue
            : 'rgba(255,255,255,.2)'
        }
        strokeWidth="1"
      />
    ),
    [props.current]
  )

const View: React.FC<Props> = props => (
  <g>
    {props.chartPoints.map((point, index) => (
      <Line
        key={index}
        point={point}
        chartBound={props.chartBound}
        current={point.current}
      />
    ))}
  </g>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { chartPoints, chartBound } = useContext(
    LineChartContext
  )
  return useMemo(
    () => (
      <View
        chartPoints={chartPoints}
        chartBound={chartBound}
      />
    ),
    [chartPoints, chartBound]
  )
}
