import * as React from 'react'
import { useContext, useMemo } from 'react'
import { BarChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  x: number
  y: number
  width: number
  height: number
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <g>
    <line
      x1={props.x}
      y1={props.y}
      x2={props.x}
      y2={props.y + props.height}
      stroke="#fff"
      strokeWidth="2"
    />
    <line
      x1={props.x}
      y1={props.y + props.height}
      x2={props.x + props.width}
      y2={props.y + props.height}
      stroke="#fff"
      strokeWidth="2"
    />
  </g>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { chartBound } = useContext(BarChartContext)
  return useMemo(
    () => {
      const { x, y, width, height } = chartBound
      return (
        <View x={x} y={y} width={width} height={height} />
      )
    },
    [chartBound]
  )
}
