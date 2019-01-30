import * as React from 'react'
import { useContext, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import { BarChartContext } from '../contexts'
import { Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type RectProps = {
  index: number
  bound: Bound
  onMouseEnter: (event: MouseEvent, index: number) => void
}
type Props = {
  hitareaBounds: Bound[]
  chartBound: Bound
  onMouseEnter: (event: MouseEvent, index: number) => void
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
        fill="transparent"
        onMouseEnter={event => {
          props.onMouseEnter(event, props.index)
        }}
      />
    ),
    [props.bound, props.index]
  )

const View: React.FC<Props> = props => (
  <g className={props.className}>
    {props.hitareaBounds.map((bound, index) => (
      <Rect
        key={index}
        index={index}
        bound={bound}
        onMouseEnter={props.onMouseEnter}
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
    handleEnterHitarea
  } = useContext(BarChartContext)
  return useMemo(
    () => (
      <StyledView
        hitareaBounds={hitareaBounds}
        chartBound={chartBound}
        onMouseEnter={handleEnterHitarea}
      />
    ),
    [hitareaBounds, chartBound]
  )
}
