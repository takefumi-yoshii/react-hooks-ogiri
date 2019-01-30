import * as React from 'react'
import { useContext, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import { LineChartContext } from '../contexts'
import { Point, Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  chartPoints: Point[]
  chartBound: Bound
  chartColumnWidth: number
  offsetX: number
  onMouseEnter: (event: MouseEvent, point: Point) => void
  className?: string
}
type RectProps = {
  point: Point
  chartBound: Bound
  chartColumnWidth: number
  offsetX: number
  onMouseEnter: (event: MouseEvent, point: Point) => void
}
// ______________________________________________________
//
// @ View

const Rect = (props: RectProps) =>
  useMemo(
    () => (
      <rect
        x={props.point.x - props.offsetX}
        y={props.chartBound.y}
        width={props.chartColumnWidth}
        height={props.chartBound.height}
        fill="transparent"
        onMouseEnter={event => {
          props.onMouseEnter(event, props.point)
        }}
      />
    ),
    [props.chartColumnWidth]
  )

const View: React.FC<Props> = props => (
  <g className={props.className}>
    {props.chartPoints.map((point, index) => (
      <Rect
        key={index}
        point={point}
        chartBound={props.chartBound}
        chartColumnWidth={props.chartColumnWidth}
        offsetX={props.offsetX}
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
    chartPoints,
    chartBound,
    chartColumnWidth,
    handleEnterHitarea
  } = useContext(LineChartContext)
  return useMemo(
    () => (
      <StyledView
        chartPoints={chartPoints}
        chartBound={chartBound}
        chartColumnWidth={chartColumnWidth}
        offsetX={chartColumnWidth / 2}
        onMouseEnter={handleEnterHitarea}
      />
    ),
    [
      chartPoints,
      chartBound,
      chartColumnWidth,
      handleEnterHitarea
    ]
  )
}
