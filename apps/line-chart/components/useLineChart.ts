import {
  useState,
  useMemo,
  useCallback,
  MouseEvent
} from 'react'
import { Record } from './records'
import { getChartSrc, Point } from './chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  width: number
  height: number
}
// ______________________________________________________
//
// @ View

const useLineChart = (props: Props) => {
  const padding = useMemo(
    () => ({
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    }),
    []
  )
  const svgRect = useMemo(
    () => ({
      width: props.width,
      height: props.height
    }),
    [props.width, props.height]
  )
  const chartBound = useMemo(
    () => ({
      x: padding.left,
      y: padding.top,
      width: props.width - padding.left - padding.right,
      height: props.height - padding.top - padding.bottom
    }),
    [props.width, props.height, padding]
  )
  const [
    { chartPoints, chartPath, chartColumnWidth },
    updateChart
  ] = useState(getChartSrc(props.records, chartBound))
  const [
    currentPoint,
    updateCurrentPoint
  ] = useState<null | Point>(null)
  const handleEnterHitarea = useCallback(
    (event: MouseEvent, enterPoint: Point) => {
      event.persist()
      updateCurrentPoint(enterPoint)
      updateChart(prev => ({
        ...prev,
        chartPoints: prev.chartPoints.map(point => {
          const isCurrent =
            point.dateLabel === enterPoint.dateLabel
          if (!isCurrent && point.current === false)
            return point
          return { ...point, current: isCurrent }
        })
      }))
    },
    []
  )
  const handleLeaveHitarea = useCallback(
    (event: MouseEvent) => {
      event.persist()
      updateCurrentPoint(null)
      updateChart(prev => ({
        ...prev,
        chartPoints: prev.chartPoints.map(point => {
          if (point.current === false) return point
          return { ...point, current: false }
        })
      }))
    },
    []
  )
  return {
    records: props.records,
    svgRect,
    chartPoints,
    chartPath,
    chartBound,
    chartColumnWidth,
    currentPoint,
    handleEnterHitarea,
    handleLeaveHitarea
  }
}
// ______________________________________________________
//
// @ exports

export { useLineChart }
