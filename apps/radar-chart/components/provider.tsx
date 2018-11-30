import * as React from 'react'
import { useRef } from 'react'
import { RadarChartContext } from './context'
import { useRadarChart } from './useRadarChart'

// ______________________________________________________
//
// @ Types

type Props = {
  padding?: number
  itemLabelIeject?: number
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const ref = useRef(null! as HTMLDivElement)
  const value = useRadarChart({
    ref,
    padding: props.padding,
    itemLabelIeject: props.itemLabelIeject
  })
  return (
    <RadarChartContext.Provider value={value}>
      <div ref={ref}>{props.children}</div>
    </RadarChartContext.Provider>
  )
}
