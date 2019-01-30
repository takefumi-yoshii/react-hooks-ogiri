import * as React from 'react'
import { useContext, useMemo } from 'react'
import { LineChartContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  d: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <path d={props.d} stroke="#fff" fill="none" />
)
// ______________________________________________________
//
// @ Container

export default () => {
  const { chartBound, chartPath } = useContext(
    LineChartContext
  )
  return useMemo(
    () => (
      <View
        d={`M${chartBound.x},${chartBound.y} M${chartPath}`}
      />
    ),
    [chartBound, chartPath]
  )
}
