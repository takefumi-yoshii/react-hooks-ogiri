import * as React from 'react'
import { useRef } from 'react'
import { PieChartContext } from './contexts'
import { usePieChart } from './usePieChart'

// ______________________________________________________
//
// @ Types

type Props = {
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const ref = useRef(null! as HTMLDivElement)
  const value = usePieChart({
    ref,
    padding: 0.05,
    centerCircleRadius: 0.6
  })
  return (
    <PieChartContext.Provider value={value}>
      <div ref={ref}>{props.children}</div>
    </PieChartContext.Provider>
  )
}
