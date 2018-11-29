import * as React from 'react'
import { useContext, useMemo } from 'react'
import { PieChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  rectSize: number
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <svg
    viewBox={`0 0 ${props.rectSize} ${props.rectSize}`}
    width={props.rectSize}
    height={props.rectSize}
  >
    <filter id="drop-shadow">
      <feGaussianBlur stdDeviation="8" />
    </filter>
    {props.children}
  </svg>
)
// ______________________________________________________
//
// @ Container

export default (props: { children?: React.ReactNode }) => {
  const { rectSize } = useContext(PieChartContext)
  return useMemo(
    () => <View rectSize={rectSize}>{props.children}</View>,
    [rectSize]
  )
}
