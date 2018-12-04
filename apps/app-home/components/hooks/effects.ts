import { useEffect } from 'react'
import { UpdateState } from '../../../types/hooks'
import { Record } from '../records'
import { State } from './useAppHome'

// ______________________________________________________
//
// @ Effects

const updateHitPoints = (
  update: UpdateState<State>,
  records: Record[],
  itemWidth: number,
  itemHeight: number,
  holizontalCount: number
) => {
  useEffect(
    () => {
      update(_state => ({
        ..._state,
        hitPoints: records.map((record, index) => {
          const offsetX = index % holizontalCount
          const offsetY = (index / holizontalCount) >> 0
          const x = itemWidth * 0.5 + offsetX * itemWidth
          const y = itemHeight * 0.5 + offsetY * itemHeight
          return { x, y }
        })
      }))
    },
    [itemWidth, itemHeight, holizontalCount]
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
        const index = elementsIndex.findIndex(
          index => index === _state.target.index
        )
        const item = elementsIndex[index]
        if (direction === -1) {
          elementsIndex.splice(_state.hitIndex, 0, item)
          elementsIndex.splice(
            elementsIndex.lastIndexOf(item),
            1
          )
        } else {
          elementsIndex.splice(index, 1)
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
  state: State,
  update: UpdateState<State>,
  records: Record[],
  itemWidth: number,
  itemHeight: number,
  holizontalCount: number
) => {
  updateHitPoints(
    update,
    records,
    itemWidth,
    itemHeight,
    holizontalCount
  )
  updateElementsIndex(state, update)
}
