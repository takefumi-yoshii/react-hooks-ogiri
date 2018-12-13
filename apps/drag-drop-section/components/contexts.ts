import { createContext } from 'react'
import { useDragDropContainer } from './useDragDropContainer'

export const IconDashboardContext = createContext(
  {} as ReturnType<typeof useDragDropContainer>
)
