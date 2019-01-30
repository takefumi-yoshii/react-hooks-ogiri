import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BarChartContext } from '../contexts'
import { Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type RectProps = {
  index: number
  bound: Bound
  isCurrent: boolean
}
type Props = {
  hitareaBounds: Bound[]
  chartBound: Bound
  currentColumn: number | null
  className?: string
}
// ______________________________________________________
//
// @ View

const Rect = (props: RectProps) =>
  useMemo(
    () => (
      <rect
        x={props.bound.x}
        y={props.bound.y}
        width={props.bound.width}
        height={props.bound.height}
        fill={
          props.isCurrent ? 'rgba(0,0,0,1)' : 'transparent'
        }
      />
    ),
    [props.isCurrent]
  )

const View: React.FC<Props> = props => (
  <g className={props.className}>
    {props.hitareaBounds.map((bound, index) => (
      <Rect
        key={index}
        index={index}
        bound={bound}
        isCurrent={props.currentColumn === index}
      />
    ))}
  </g>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  rect {
    cursor: pointer;
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    hitareaBounds,
    chartBound,
    currentColumn
  } = useContext(BarChartContext)
  return useMemo(
    () => (
      <StyledView
        hitareaBounds={hitareaBounds}
        chartBound={chartBound}
        currentColumn={currentColumn}
      />
    ),
    [hitareaBounds, chartBound, currentColumn]
  )
}
