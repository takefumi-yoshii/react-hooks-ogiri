import { createContext } from 'react'
import { useIconDashboard } from './hooks/useIconDashboard'

export const IconDashboardContext = createContext(
  {} as ReturnType<typeof useIconDashboard>
)
