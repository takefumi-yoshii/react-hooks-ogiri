import * as React from 'react'
import { RadarPoint } from './points'

// ______________________________________________________
//.
// @ Types

type Props = {
  points: RadarPoint[]
}

// ______________________________________________________
//
// @ View

export default (props: Props) => (
  <polygon
    points={props.points
      .map(point => `${point.x},${point.y}`)
      .join(' ')}
    stroke="#eee"
    strokeWidth="2"
    fill={`rgba(20,50,80,.3)`}
  />
)
