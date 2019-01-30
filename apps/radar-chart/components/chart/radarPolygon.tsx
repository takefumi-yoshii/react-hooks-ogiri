import * as React from 'react'
import { useContext, useMemo } from 'react'
import { RadarChartContext } from '../context'
import { RadarPoint } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  points: RadarPoint[]
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <polygon
    points={props.points
      .map(point => `${point.x},${point.y}`)
      .join(' ')}
    stroke="#eee"
    strokeWidth="2"
    fill={`rgba(20,50,80,.3)`}
  />
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { radarPoints } = useContext(RadarChartContext)
  return useMemo(() => <View points={radarPoints} />, [
    radarPoints
  ])
}
