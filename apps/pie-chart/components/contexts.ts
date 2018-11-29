import { createContext } from 'react'
import { usePieChart } from './usePieChart'

export const PieChartContext = createContext(
  {} as ReturnType<typeof usePieChart>
)
