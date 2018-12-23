import {
  useState,
  useCallback,
  useEffect,
  RefObject,
  ChangeEvent,
  MouseEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  width: number
  height: number
  mouseDown: boolean
  mouseX: number
  mouseY: number
  fillColor: string
  fillSize: number
  fileName: string
}
type Props = {
  ref: RefObject<HTMLCanvasElement>
} & Partial<State>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  width: 315,
  height: 315,
  mouseDown: false,
  mouseX: 0,
  mouseY: 0,
  fillColor: '#4fcac9',
  fillSize: 48,
  fileName: ''
})
// ______________________________________________________
//
// @ Hooks

function useDrawableCanvas(props: Props) {
  const [state, update] = useState<State>(
    merge(defaultState(), { ...props })
  )
  const handleCanvasMouseDown = useCallback(
    () => {
      update(_state => ({ ..._state, mouseDown: true }))
    },
    [state.mouseDown]
  )
  const handleCanvasMouseUp = useCallback(
    () => {
      update(_state => ({ ..._state, mouseDown: false }))
    },
    [state.mouseDown]
  )
  const handleCanvasMouseMove = useCallback(
    (event: MouseEvent<HTMLCanvasElement>) => {
      if (props.ref.current === null) return
      const clientRect = props.ref.current.getBoundingClientRect()
      const mouseX =
        (event.clientX - clientRect.left) *
        window.devicePixelRatio
      const mouseY =
        (event.clientY - clientRect.top) *
        window.devicePixelRatio
      update(_state => ({
        ..._state,
        mouseX,
        mouseY
      }))
    },
    [state.mouseX]
  )
  useEffect(
    () => {
      if (!state.mouseDown || props.ref.current === null)
        return
      drawLine(
        props.ref.current,
        state.mouseX,
        state.mouseY,
        state.fillSize * window.devicePixelRatio,
        state.fillColor
      )
    },
    [state.mouseX]
  )
  const handleChangeFillSize = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        fillSize: Number(event.target.value)
      }))
    },
    [state.fillSize]
  )
  const handleChangeFillColor = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        fillColor: event.target.value
      }))
    },
    [state.fillColor]
  )
  const handleChangeFileName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        fileName: event.target.value
      }))
    },
    [state.fileName]
  )
  const handleClearRect = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.persist()
      if (props.ref.current === null) return
      clearRect(props.ref.current)
    },
    [props.ref.current]
  )
  return {
    ...state,
    ref: props.ref,
    handleCanvasMouseDown,
    handleCanvasMouseUp,
    handleCanvasMouseMove,
    handleChangeFillSize,
    handleChangeFillColor,
    handleChangeFileName,
    handleClearRect
  }
}
// ______________________________________________________
//
// @ Procs

function drawLine(
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  fillSize?: number,
  fillColor?: string
) {
  const ctx = canvas.getContext('2d')
  if (ctx === null) return
  if (fillSize === undefined || fillColor === undefined)
    return
  const image = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  )
  ctx.putImageData(image, 0, 0)
  ctx.beginPath()
  ctx.arc(x, y, fillSize, 0, 2 * Math.PI, false)
  ctx.fillStyle = fillColor
  ctx.fill()
}

function clearRect(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (ctx === null) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
// ______________________________________________________
//
// @ exports

export { useDrawableCanvas }
