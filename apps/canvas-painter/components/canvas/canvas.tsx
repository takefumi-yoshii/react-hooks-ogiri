import * as React from 'react'
import { useContext, useMemo } from 'react'
import { DrawableCanvasContext } from '../contexts'

// ______________________________________________________
//
// @ View

export default () => {
  const {
    ref,
    width,
    height,
    handleCanvasMouseDown,
    handleCanvasMouseMove,
    handleCanvasMouseUp
  } = useContext(DrawableCanvasContext)
  return useMemo(
    () => (
      <canvas
        ref={ref}
        width={width * window.devicePixelRatio}
        height={height * window.devicePixelRatio}
        style={{ width, height }}
        onMouseMove={handleCanvasMouseMove}
        onMouseDown={handleCanvasMouseDown}
        onMouseUp={handleCanvasMouseUp}
        onMouseLeave={handleCanvasMouseUp}
      />
    ),
    [
      ref,
      width,
      height,
      handleCanvasMouseDown,
      handleCanvasMouseMove,
      handleCanvasMouseUp
    ]
  )
}
