import { createContext } from 'react'
import { useAppHome } from './hooks/useAppHome'

export const DragDropContext = createContext(
  {} as ReturnType<typeof useAppHome>
)
