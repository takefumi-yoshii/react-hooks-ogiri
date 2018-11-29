import * as React from 'react'
import { LineChartContext } from './contexts'
import { useLineChart } from './useLineChart'
import { Record } from './records'

// ______________________________________________________
//
// @ Types

type Props = {
  width: number
  height: number
  records: Record[]
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const value = useLineChart({
    records: props.records,
    width: props.width,
    height: props.height
  })
  return (
    <LineChartContext.Provider value={value}>
      {props.children}
    </LineChartContext.Provider>
  )
}
