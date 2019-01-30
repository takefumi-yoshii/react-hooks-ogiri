import * as React from 'react'
import { useContext, useMemo } from 'react'
import { RadarChartContext } from '../context'
import { RadarPoint } from '../chartSrc'

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

const View: React.FC<Props> = props => (
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
// ______________________________________________________
//
// @ Container

export default () => {
  const { radarPoints } = useContext(RadarChartContext)
  return useMemo(
    () => <View points={radarPoints} radius={6} />,
    [radarPoints]
  )
}
