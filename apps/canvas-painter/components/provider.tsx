import * as React from 'react'
import { useRef } from 'react'
import { DrawableCanvasContext } from './contexts'
import { useDrawableCanvas } from './useDrawableCanvas'
// ______________________________________________________
//
// @ View

const Provider: React.FC<{}> = props => {
  const canvasRef = useRef({} as HTMLCanvasElement)
  const value = useDrawableCanvas({ ref: canvasRef })
  return (
    <DrawableCanvasContext.Provider value={value}>
      {props.children}
    </DrawableCanvasContext.Provider>
  )
}

export default Provider
