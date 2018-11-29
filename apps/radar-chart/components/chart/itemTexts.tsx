import * as React from 'react'
import { useMemo } from 'react'
import { ItemPoint } from './points'

// ______________________________________________________
//
// @ Types

type Props = {
  points: ItemPoint[]
}
type TextProps = {
  point: ItemPoint
}
// ______________________________________________________
//
// @ View

const Text = (props: TextProps) =>
  useMemo(
    () => (
      <text
        x={props.point.x}
        y={props.point.y}
        fontSize="12"
        fill={props.point.color}
        textAnchor="middle"
      >
        {props.point.title}：{props.point.score}
      </text>
    ),
    [props.point.score]
  )

export default (props: Props) => (
  <g>
    {props.points.map((point, index) => (
      <Text key={index} point={point} />
    ))}
  </g>
)
