import { useState, useMemo, RefObject } from 'react'
// @ts-ignore
import throttle from 'lodash.throttle'
// @ts-ignore
import merge from 'lodash.merge'
import { Record } from '../records'
import { useRotateTileContainer } from './useRotateTileContainer'
import Effects from './effects'
import TouchHandlers from './touchHandlers'
import MouseHandlers from './mouseHandlers'

// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
}
type Target = {
  index: number
  startRectPoint: Point
  pointOffset: Point
  startMousePoint: Point
}
type State = {
  isMouseDown: boolean
  target: Target
  elementsIndex: number[]
  hitPoints: Point[]
  hitIndex: number
  prevHitIndex: number
}
type Options = {
  verticalCount: number
  holizontalCount: number
}
type Props = {
  records: Record[]
  ref: RefObject<HTMLElement>
} & Partial<Options>

// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  isMouseDown: false,
  target: {
    index: -1,
    startRectPoint: { x: 0, y: 0 },
    pointOffset: { x: 0, y: 0 },
    startMousePoint: { x: 0, y: 0 }
  },
  elementsIndex: [],
  hitPoints: [],
  hitIndex: -1,
  prevHitIndex: -1
})
// ______________________________________________________
//
// @ Hooks

const useAppHome = (props: Props) => {
  const rotateTileContainer = useMemo(
    () =>
      useRotateTileContainer({
        ref: props.ref,
        verticalCount: props.verticalCount,
        holizontalCount: props.holizontalCount
      }),
    [props]
  )
  const [state, update] = useState<State>({
    ...defaultState(),
    ...{
      elementsIndex: props.records.map((record, i) => i)
    }
  })
  Effects(props.records, state, update, rotateTileContainer)
  return {
    records: props.records,
    elementsIndex: state.elementsIndex,
    isMouseDown: state.isMouseDown,
    target: state.target,
    ...rotateTileContainer,
    ...TouchHandlers(
      state,
      update,
      rotateTileContainer.itemHeight
    ),
    ...MouseHandlers(
      state,
      update,
      rotateTileContainer.itemHeight
    )
  }
}
// ______________________________________________________
//
// @ exports

export { useAppHome, State }
