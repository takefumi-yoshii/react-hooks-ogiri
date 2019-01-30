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
}
// ______________________________________________________
//
// @ View

const Provider: React.FC<Props> = props => {
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

export default Provider
