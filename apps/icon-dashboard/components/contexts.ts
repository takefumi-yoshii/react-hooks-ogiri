import { createContext } from 'react'
import { useIconDashboard } from './hooks/useIconDashboard'

export const DragDropContext = createContext(
  {} as ReturnType<typeof useIconDashboard>
)
