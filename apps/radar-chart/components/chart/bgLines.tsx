import * as React from 'react'
import { useMemo } from 'react'
import { LinePoint } from './points'

// ______________________________________________________
//
// @ Types

type Props = {
  center: number
  points: LinePoint[]
}
type LineProps = {
  center: number
  point: LinePoint
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
// ______________________________________________________
//
// @ Container

export default (props: Props) =>
  useMemo(
    () => (
      <g>
        {props.points.map((point, index) => (
          <Line key={index} center={props.center} point={point} />
        ))}
      </g>
    ),
    [props.center]
  )
