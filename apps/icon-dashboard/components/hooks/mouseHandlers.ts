import {
  useCallback,
  MouseEvent,
  Dispatch,
  SetStateAction
} from 'react'
import { State } from './useIconDashboard'
import * as Handlers from './handlers'

// ______________________________________________________
//
// @ Handlers

const handleMouseDownElement = (
  state: State,
  update: Dispatch<SetStateAction<State>>
) => {
  return useCallback(
    (event: MouseEvent<HTMLElement>, index: number) => {
      event.persist()
      const rect = (event.target as HTMLElement).getBoundingClientRect()
      Handlers.start(update)({
        index,
        startRectPoint: { x: rect.left, y: rect.top },
        startMousePoint: {
          x: event.pageX,
          y: event.pageY
        }
      })
    },
    [state.isMouseDown]
  )
}
const handleMouseMoveElement = (
  state: State,
  update: Dispatch<SetStateAction<State>>,
  itemHeight: number
) => {
  return useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.persist()
      const rect = (event.target as HTMLElement).getBoundingClientRect()
      const pointOffset = {
        x: event.pageX - state.target.startMousePoint.x,
        y: event.pageY - state.target.startMousePoint.y
      }
      const center = {
        x: rect.left + rect.width * 0.5,
        y: rect.top + rect.height * 0.5
      }
      Handlers.move(update, itemHeight)({
        center,
        pointOffset
      })
    },
    [state.isMouseDown, state.target]
  )
}
const handleMouseUpElement = (
  update: Dispatch<SetStateAction<State>>
) => {
  return useCallback((event: MouseEvent<HTMLElement>) => {
    event.persist()
    Handlers.end(update)
  }, [])
}
// ______________________________________________________
//
// @ exports

export default (
  state: State,
  update: Dispatch<SetStateAction<State>>,
  itemHeight: number
) => ({
  handleMouseDownElement: handleMouseDownElement(
    state,
    update
  ),
  handleMouseMoveElement: handleMouseMoveElement(
    state,
    update,
    itemHeight
  ),
  handleMouseUpElement: handleMouseUpElement(update)
})
