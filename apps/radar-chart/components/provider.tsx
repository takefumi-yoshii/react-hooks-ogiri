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
}
// ______________________________________________________
//
// @ View

const Provider: React.FC<Props> = props => {
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

export default Provider
