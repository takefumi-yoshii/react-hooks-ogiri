import * as React from 'react'
import { useRef } from 'react'
import { PieChartContext } from './contexts'
import { usePieChart } from './usePieChart'
// ______________________________________________________
//
// @ View

const Provider: React.FC<{}> = props => {
  const ref = useRef(null! as HTMLDivElement)
  const value = usePieChart({
    ref,
    padding: 0.05,
    centerCircleRadius: 0.3
  })
  return (
    <PieChartContext.Provider value={value}>
      <div ref={ref}>{props.children}</div>
    </PieChartContext.Provider>
  )
}

export default Provider
