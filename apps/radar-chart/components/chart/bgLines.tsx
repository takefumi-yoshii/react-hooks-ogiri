import * as React from 'react'
import { useContext, useMemo } from 'react'
import { RadarChartContext } from '../context'
import { LinePoint } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type LineProps = {
  center: number
  point: LinePoint
}
type Props = {
  center: number
  points: LinePoint[]
}
// ______________________________________________________
//
// @ View

const Line = (props: LineProps) => (
  <line
    x1={props.center + 1}
    y1={props.center + 1}
    x2={props.point.x + 1}
    y2={props.point.y + 1}
    stroke="#656a79"
    strokeWidth="1"
  />
)

const View: React.FC<Props> = props => (
  <g>
    {props.points.map((point, index) => (
      <Line
        key={index}
        center={props.center}
        point={point}
      />
    ))}
  </g>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { center, linesPoints } = useContext(
    RadarChartContext
  )
  return useMemo(
    () => <View center={center} points={linesPoints} />,
    [center]
  )
}
