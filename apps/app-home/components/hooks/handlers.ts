import { UpdateState } from '../../../types/hooks'
import { State } from './useAppHome'

// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
}
type StartProps = {
  index: number
  startRectPoint: Point
  startMousePoint: Point
}
type MoveProps = {
  center: Point
  pointOffset: Point
}
// ______________________________________________________
//
// @ Handlers

const end = (update: UpdateState<State>) => {
  return update(_state => {
    if (_state.target.index === -1) return _state
    return {
      ..._state,
      isMouseDown: false,
      target: {
        index: -1,
        startRectPoint: { x: 0, y: 0 },
        pointOffset: { x: 0, y: 0 },
        startMousePoint: { x: 0, y: 0 }
      }
    }
  })
}
const move = (
  update: UpdateState<State>,
  itemHeight: number
) => {
  return ({ center, pointOffset }: MoveProps) => {
    update(_state => {
      if (!_state.isMouseDown) return _state
      const hitIndex = _state.hitPoints
        .map(
          point =>
            Math.sqrt(
              Math.pow(center.x - point.x, 2) +
                Math.pow(center.y - point.y, 2)
            ) <
            itemHeight * 0.5
        )
        .findIndex(flag => flag)
      return {
        ..._state,
        target: { ..._state.target, pointOffset },
        hitIndex:
          hitIndex === -1 ? _state.hitIndex : hitIndex
      }
    })
  }
}
const start = (update: UpdateState<State>) => {
  return (props: StartProps) => {
    update(_state => {
      return {
        ..._state,
        target: {
          ..._state.target,
          ...props
        },
        isMouseDown: true,
        hitIndex: props.index,
        prevHitIndex: props.index
      }
    })
  }
}
// ______________________________________________________
//
// @ exports

export { start, move, end }
