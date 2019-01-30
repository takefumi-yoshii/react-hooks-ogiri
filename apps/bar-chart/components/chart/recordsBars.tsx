import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BarChartContext } from '../contexts'
import { Point, Bound } from '../chartSrc'

// ______________________________________________________
//
// @ Types

type BarProps = {
  x: number
  y: number
  width: number
  height: number
  color: string
}
type Props = {
  chartPoints: Point[]
  chartBound: Bound
  offsetX: number
  offsetY: number
  chartColumnWidth: number
  className?: string
}
// ______________________________________________________
//
// @ View

const Bar = (props: BarProps) =>
  useMemo(
    () => (
      <>
        <rect
          x={props.x + 2}
          y={props.y}
          width={props.width}
          height={props.height}
          filter="url(#drop-shadow)"
          fill="rgba(0,0,0,.4)"
        />
        <rect
          x={props.x}
          y={props.y}
          width={props.width}
          height={props.height}
          fill={props.color}
        />
      </>
    ),
    [props.width]
  )

const View: React.FC<Props> = props => (
  <g className={props.className}>
    {props.chartPoints.map((point, index) => (
      <Bar
        key={index}
        x={point.x + props.offsetX}
        y={point.y}
        width={props.chartColumnWidth}
        height={
          props.chartBound.height - point.y + props.offsetY
        }
        color={point.color}
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
  const {
    padding,
    chartPoints,
    chartBound,
    chartColumnWidth
  } = useContext(BarChartContext)
  return useMemo(
    () => (
      <>
        {chartPoints
          .map((points, index) => (
            <StyledView
              key={index}
              chartPoints={points}
              chartBound={chartBound}
              chartColumnWidth={chartColumnWidth}
              offsetX={
                chartColumnWidth * -chartPoints.length -
                chartColumnWidth * 0.5 +
                index * chartColumnWidth
              }
              offsetY={padding.top}
            />
          ))
          .reverse()}
      </>
    ),
    [padding, chartPoints, chartBound, chartColumnWidth]
  )
}
