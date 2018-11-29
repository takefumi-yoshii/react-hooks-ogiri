import * as React from 'react'
import { useRef } from 'react'
import { DrawableCanvasContext } from './contexts'
import { useDrawableCanvas } from './useDrawableCanvas'

// ______________________________________________________
//
// @ Types

type Props = {
  children?: React.ReactNode
}

// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const canvasRef = useRef({} as HTMLCanvasElement)
  const value = useDrawableCanvas({ ref: canvasRef })
  return (
    <DrawableCanvasContext.Provider value={value}>
      {props.children}
    </DrawableCanvasContext.Provider>
  )
}
