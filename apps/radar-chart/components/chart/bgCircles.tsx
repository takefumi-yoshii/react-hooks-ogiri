import * as React from 'react'
import { useMemo } from 'react'
import { times } from '../../../utils'
// ______________________________________________________
//
// @ Types

type Props = {
  center: number
  stepCount: number
  radius: number
}
type CircleProps = {
  center: number
  stepCount: number
  radius: number
  isLast: boolean
}
// ______________________________________________________
//
// @ View

const Circle = (props: CircleProps) => (
  <circle
    cx={props.center}
    cy={props.center}
    r={props.radius}
    fill="rgba(0,0,0,.1)"
    stroke="#656a79"
    strokeWidth={props.isLast ? 2 : 1}
  />
)

export default (props: Props) =>
  useMemo(
    () => (
      <>
        <circle
          cx={props.center}
          cy={props.center}
          r={props.radius}
          fill="rgba(0,0,0,.1)"
        />
        {times(props.stepCount).map(index => (
          <g key={index}>
            <Circle
              center={props.center}
              stepCount={props.stepCount}
              radius={
                (props.radius * index) /
                (props.stepCount - 1)
              }
              isLast={index === props.stepCount - 1}
            />
          </g>
        ))}
      </>
    ),
    [props.center, props.stepCount]
  )
