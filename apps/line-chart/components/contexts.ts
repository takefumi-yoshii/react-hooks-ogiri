import { createContext } from 'react'
import { useLineChart } from './useLineChart'

export const LineChartContext = createContext(
  {} as ReturnType<typeof useLineChart>
)
