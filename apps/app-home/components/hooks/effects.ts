import { useEffect } from 'react'
import { UpdateState } from '../../../types/hooks'
import { Record } from '../records'
import { State } from './useAppHome'
import { useRotateTileContainer } from './useRotateTileContainer'
// ______________________________________________________
//
// @ Effects

const updateHitPoints = (
  update: UpdateState<State>,
  records: Record[],
  rotateTileContainer: ReturnType<
    typeof useRotateTileContainer
  >
) => {
  useEffect(
    () => {
      update(_state => ({
        ..._state,
        hitPoints: records.map((record, index) => {
          const {
            holizontalCount,
            itemWidth,
            itemHeight
          } = rotateTileContainer
          const offsetX = index % holizontalCount
          const offsetY = (index / holizontalCount) >> 0
          const x = itemWidth * 0.5 + offsetX * itemWidth
          const y = itemHeight * 0.5 + offsetY * itemHeight
          return { x, y }
        })
      }))
    },
    [rotateTileContainer.containerWidth]
  )
}
const updateElementsIndex = (
  state: State,
  update: UpdateState<State>
) => {
  useEffect(
    () => {
      update(_state => {
        const direction =
          _state.hitIndex - _state.prevHitIndex
        if (direction === 0) return _state
        const elementsIndex = [..._state.elementsIndex]
        const i = elementsIndex.findIndex(
          index => index === _state.target.index
        )
        const item = elementsIndex[i]
        if (direction === -1) {
          elementsIndex.splice(_state.hitIndex, 0, item)
          elementsIndex.splice(
            elementsIndex.lastIndexOf(item),
            1
          )
        } else {
          elementsIndex.splice(i, 1)
          elementsIndex.splice(_state.hitIndex, 0, item)
        }
        return {
          ..._state,
          elementsIndex,
          prevHitIndex: _state.hitIndex
        }
      })
    },
    [state.hitIndex]
  )
}
// ______________________________________________________
//
// @ exports

export default (
  records: Record[],
  state: State,
  update: UpdateState<State>,
  rotateTileContainer: ReturnType<
    typeof useRotateTileContainer
  >
) => {
  updateHitPoints(update, records, rotateTileContainer)
  updateElementsIndex(state, update)
}
