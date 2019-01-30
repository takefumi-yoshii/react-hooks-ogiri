import * as React from 'react'
import { useContext, useMemo } from 'react'
import { PieChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  rectSize: number
  centerCircleRadius: number
  center: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <>
    <circle
      cx={props.center}
      cy={props.center}
      r={props.centerCircleRadius}
      fill="#000"
      filter="url(#drop-shadow)"
    />
    <circle
      cx={props.center}
      cy={props.center}
      r={props.centerCircleRadius}
      fill="#303440"
      stroke="#161a27"
      strokeWidth="2"
    />
  </>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { rectSize, centerCircleRadius } = useContext(
    PieChartContext
  )
  return useMemo(
    () => (
      <View
        rectSize={rectSize}
        centerCircleRadius={centerCircleRadius}
        center={rectSize * 0.5}
      />
    ),
    [rectSize, centerCircleRadius]
  )
}
