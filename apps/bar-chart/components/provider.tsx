import * as React from 'react'
import { BarChartContext } from './contexts'
import { useBarChart } from './useBarChart'
import { Record } from './records'

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
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const value = useBarChart({
    rowCount: props.rowCount,
    columnCount: props.columnCount,
    max: props.max,
    width: props.width,
    height: props.height,
    multipleRecords: props.multipleRecords
  })
  return (
    <BarChartContext.Provider value={value}>
      {props.children}
    </BarChartContext.Provider>
  )
}
