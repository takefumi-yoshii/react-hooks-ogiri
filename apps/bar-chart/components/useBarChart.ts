import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  MouseEvent
} from 'react'
import { times } from '../../utils/index'
import { Record } from './records'
import { getMultipleChartSrc, Point } from './chartSrc'

// ______________________________________________________
//
// @ Types

type Props = {
  rowCount: number
  columnCount: number
  max: number
  width: number
  height: number
  multipleRecords: Record[][]
}
// ______________________________________________________
//
// @ View

const useBarChart = (props: Props) => {
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
  const multipleChartSrc = useMemo(
    () => {
      return getMultipleChartSrc(
        props.multipleRecords,
        chartBound
      )
    },
    [props.multipleRecords, chartBound]
  )
  const chartPoints = useMemo(
    () => multipleChartSrc.map(src => src.chartPoints),
    [multipleChartSrc]
  )
  const chartColumnWidth = useMemo(
    () =>
      multipleChartSrc.map(src => src.chartColumnWidth)[0],
    [multipleChartSrc]
  )
  const bgRowLinesPoints = useMemo(
    () => {
      const distance = chartBound.height / props.rowCount
      return times(props.rowCount).map(index => {
        return {
          x: chartBound.x,
          y: distance * index + padding.top
        }
      })
    },
    [chartBound, props.rowCount]
  )
  const hitareaBounds = useMemo(
    () => {
      const count = props.multipleRecords[0].length
      const columnWidth =
        chartBound.width / props.columnCount
      return times(count).map(index => {
        return {
          x: chartBound.x + columnWidth * index,
          y: chartBound.y,
          width: columnWidth,
          height: chartBound.height
        }
      })
    },
    [chartBound, props.columnCount, props.multipleRecords]
  )
  const [currentColumn, updateCurrentColumn] = useState<
    null | number
  >(null)
  const [currentData, updateCurrentData] = useState<
    (Point | null)[]
  >([null])
  const handleEnterHitarea = useCallback(
    (event: MouseEvent, index: number) => {
      event.persist()
      updateCurrentColumn(index)
    },
    []
  )
  const handleLeaveHitarea = useCallback(
    (event: MouseEvent) => {
      event.persist()
      updateCurrentColumn(null)
    },
    []
  )
  useEffect(
    () => {
      const points = multipleChartSrc.map(chartSrc => {
        if (currentColumn === null) return null
        return chartSrc.chartPoints[currentColumn]
      })
      updateCurrentData(points)
    },
    [currentColumn]
  )
  return {
    multipleRecords: props.multipleRecords,
    padding,
    svgRect,
    chartBound,
    chartPoints,
    chartColumnWidth,
    bgRowLinesPoints,
    hitareaBounds,
    currentColumn,
    currentData,
    handleEnterHitarea,
    handleLeaveHitarea
  }
}
// ______________________________________________________
//
// @ exports

export { useBarChart }
