import { createContext } from 'react'
import { useDragDropContainer } from './useDragDropContainer'

export const DragDropContext = createContext(
  {} as ReturnType<typeof useDragDropContainer>
)
