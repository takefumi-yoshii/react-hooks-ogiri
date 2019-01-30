import * as React from 'react'
import { useContext, useMemo } from 'react'
import { times } from '../../../utils'
import { RadarChartContext } from '../context'

// ______________________________________________________
//
// @ Types

type CircleProps = {
  center: number
  stepCount: number
  radius: number
  isLast: boolean
}
type Props = {
  center: number
  stepCount: number
  radius: number
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

const View: React.FC<Props> = props => (
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
            (props.radius * index) / (props.stepCount - 1)
          }
          isLast={index === props.stepCount - 1}
        />
      </g>
    ))}
  </>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { center, stepCount, radius } = useContext(
    RadarChartContext
  )
  return useMemo(
    () => (
      <View
        center={center}
        stepCount={stepCount}
        radius={radius}
      />
    ),
    [center, stepCount, radius]
  )
}
