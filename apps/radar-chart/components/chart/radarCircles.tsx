import * as React from 'react'
import { RadarPoint } from './points'

// ______________________________________________________
//
// @ Types

type Props = {
  points: RadarPoint[]
  radius: number
}
// ______________________________________________________
//
// @ View

export default (props: Props) => (
  <g>
    {props.points.map((point, index) => (
      <circle
        key={index}
        cx={point.x}
        cy={point.y}
        r={props.radius}
        fill={point.color}
        stroke="#161a27"
        strokeWidth="2"
      />
    ))}
  </g>
)
