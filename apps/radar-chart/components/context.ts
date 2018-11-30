import { createContext } from 'react'
import { useRadarChart } from './useRadarChart'

export const RadarChartContext = createContext(
  {} as ReturnType<typeof useRadarChart>
)
