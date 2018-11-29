import { createContext } from 'react'
import { useBarChart } from './useBarChart'

export const BarChartContext = createContext(
  {} as ReturnType<typeof useBarChart>
)
