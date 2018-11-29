import { createContext } from 'react'
import { useDrawableCanvas } from './useDrawableCanvas'

export const DrawableCanvasContext = createContext(
  {} as ReturnType<typeof useDrawableCanvas>
)
