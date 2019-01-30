import * as React from 'react'
import { useContext, useMemo } from 'react'
import { RadarChartContext } from '../context'
import { ItemPoint } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type TextProps = {
  point: ItemPoint
}
type Props = {
  points: ItemPoint[]
}
// ______________________________________________________
//
// @ View

const Text = (props: TextProps) => (
  <text
    x={props.point.x}
    y={props.point.y}
    fill={props.point.color}
    fontSize="12"
    textAnchor="middle"
  >
    {props.point.title}：{props.point.score}
  </text>
)

const View: React.FC<Props> = props => (
  <g>
    {props.points.map((point, index) => (
      <Text key={index} point={point} />
    ))}
  </g>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { itemsPoints, center } = useContext(
    RadarChartContext
  )
  return useMemo(() => <View points={itemsPoints} />, [
    center
  ])
}
