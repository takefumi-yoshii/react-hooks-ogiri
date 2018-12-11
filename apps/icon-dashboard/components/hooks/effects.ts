import { useEffect, Dispatch, SetStateAction } from 'react'
import { Record } from '../records'
import { State } from './useIconDashboard'
import { useRotateTileContainer } from './useRotateTileContainer'
// ______________________________________________________
//
// @ Effects

const updateHitPoints = (
  update: Dispatch<SetStateAction<State>>,
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
const updateIndexMapping = (
  state: State,
  update: Dispatch<SetStateAction<State>>
) => {
  useEffect(
    () => {
      update(_state => {
        const direction =
          _state.hitIndex - _state.prevHitIndex
        if (direction === 0) return _state
        const indexMapping = [..._state.indexMapping]
        const i = indexMapping.findIndex(
          index => index === _state.target.index
        )
        const item = indexMapping[i]
        if (direction === -1) {
          indexMapping.splice(_state.hitIndex, 0, item)
          indexMapping.splice(
            indexMapping.lastIndexOf(item),
            1
          )
        } else {
          indexMapping.splice(i, 1)
          indexMapping.splice(_state.hitIndex, 0, item)
        }
        return {
          ..._state,
          indexMapping,
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
  update: Dispatch<SetStateAction<State>>,
  rotateTileContainer: ReturnType<
    typeof useRotateTileContainer
  >
) => {
  updateHitPoints(update, records, rotateTileContainer)
  updateIndexMapping(state, update)
}
