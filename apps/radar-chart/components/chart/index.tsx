import * as React from 'react'
import { useContext, useMemo } from 'react'
import { RadarChartContext } from '../context'

// ______________________________________________________
//
// @ Types

type Props = {
  rectSize: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <svg
    viewBox={`0 0 ${props.rectSize} ${props.rectSize}`}
    width={props.rectSize}
    height={props.rectSize}
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
  const { rectSize } = useContext(RadarChartContext)
  return useMemo(
    () => <View rectSize={rectSize}>{props.children}</View>,
    [rectSize]
  )
}

export default Container
