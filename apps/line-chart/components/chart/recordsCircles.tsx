import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
import { LineChartContext } from '../contexts'
import { Point } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  chartPoints: Point[]
  className?: string
}
type CircleProps = {
  point: Point
  current: boolean
}
// ______________________________________________________
//
// @ View

const Circle = (props: CircleProps) =>
  useMemo(
    () => (
      <circle
        cx={props.point.x}
        cy={props.point.y}
        r={props.point.current ? 6 : 3}
        fill={
          props.point.current ? styles.blue : 'transparent'
        }
        stroke="#fff"
        strokeWidth={props.point.current ? 2 : 1}
      />
    ),
    [props.current]
  )

const View: React.FC<Props> = props => (
  <g className={props.className}>
    {props.chartPoints.map((point, index) => (
      <Circle
        key={index}
        point={point}
        current={point.current}
      />
    ))}
  </g>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  circle {
    transition-duration: 0.2s;
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const { chartPoints } = useContext(LineChartContext)
  return useMemo(
    () => <StyledView chartPoints={chartPoints} />,
    [chartPoints]
  )
}
