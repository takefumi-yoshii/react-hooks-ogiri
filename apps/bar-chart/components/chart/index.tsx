import * as React from 'react'
import { useContext, useMemo, MouseEvent } from 'react'
import { BarChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  width: number
  height: number
  onMouseLeave: (event: MouseEvent) => void
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <svg
    viewBox={`0 0 ${props.width} ${props.height}`}
    width={props.width}
    height={props.height}
    onMouseLeave={props.onMouseLeave}
  >
    <filter id="drop-shadow">
      <feGaussianBlur stdDeviation="2" />
    </filter>
    {props.children}
  </svg>
)
// ______________________________________________________
//
// @ Container

const Container: React.FC<{}> = props => {
  const { svgRect, handleLeaveHitarea } = useContext(
    BarChartContext
  )
  return useMemo(
    () => (
      <View
        width={svgRect.width}
        height={svgRect.height}
        onMouseLeave={handleLeaveHitarea}
      >
        {props.children}
      </View>
    ),
    [svgRect, handleLeaveHitarea]
  )
}

export default Container
