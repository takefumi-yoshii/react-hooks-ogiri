import { useCallback, TouchEvent } from 'react'
import { UpdateState } from '../../../types/hooks'
import { State } from './useAppHome'
import * as Handlers from './handlers'

// ______________________________________________________
//
// @ Handlers

const handleTouchStartElement = (
  state: State,
  update: UpdateState<State>
) => {
  return useCallback(
    (event: TouchEvent<HTMLElement>, index: number) => {
      event.persist()
      const rect = (event.target as HTMLElement).getBoundingClientRect()
      Handlers.start(update)({
        index,
        startRectPoint: { x: rect.left, y: rect.top },
        startMousePoint: {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        }
      })
    },
    [state.isMouseDown]
  )
}
const handleTouchMoveElement = (
  state: State,
  update: UpdateState<State>,
  itemHeight: number
) => {
  return useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      const rect = (event.target as HTMLElement).getBoundingClientRect()
      const pointOffset = {
        x:
          event.touches[0].clientX -
          state.target.startMousePoint.x,
        y:
          event.touches[0].clientY -
          state.target.startMousePoint.y
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
const handleTouchEndElement = (
  update: UpdateState<State>
) => {
  return useCallback((event: TouchEvent<HTMLElement>) => {
    event.persist()
    Handlers.end(update)
  }, [])
}
// ______________________________________________________
//
// @ exports

export default (
  state: State,
  update: UpdateState<State>,
  itemHeight: number
) => ({
  handleTouchMoveElement: handleTouchMoveElement(
    state,
    update,
    itemHeight
  ),
  handleTouchStartElement: handleTouchStartElement(
    state,
    update
  ),
  handleTouchEndElement: handleTouchEndElement(update)
})
