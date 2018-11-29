import {
  useState,
  useMemo,
  useCallback,
  TouchEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  isTouchDown: boolean
  offsetX: number
  startX: number
  transitionDuration: number
  showOpener: boolean
  opend: boolean
}
type Options = {
  threshold: number
}
type Props = Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  isTouchDown: false,
  offsetX: 0,
  startX: 0,
  transitionDuration: 0,
  showOpener: false,
  opend: false
})
const defaultOptions = (): Options => ({
  threshold: 80
})
// ______________________________________________________
//
// @ Hooks

function useSwipeItemOpener(props?: Props) {
  const [state, update] = useState<State>(defaultState())
  const options = useMemo(
    (): Options => merge(defaultOptions(), props),
    [props]
  )
  const handleTouchDown = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => {
        if (_state.opend) return _state
        const startX = event.touches[0].clientX
        const opend =
          _state.showOpener && startX < options.threshold
        return {
          ..._state,
          isTouchDown: true,
          startX,
          showOpener: false,
          transitionDuration: 0,
          opend
        }
      })
    },
    []
  )
  const handleTouchUp = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        isTouchDown: false,
        offsetX: _state.showOpener ? options.threshold : 0,
        startX: 0,
        transitionDuration: 200
      }))
    },
    []
  )
  const handleTouchMove = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => {
        if (_state.opend) return _state
        const offsetX =
          event.touches[0].clientX - _state.startX
        if (offsetX < 0) return
        return {
          ..._state,
          isTouchDown: false,
          showOpener: offsetX > options.threshold,
          offsetX
        }
      })
    },
    []
  )
  const containerStyle = useMemo(
    () => ({
      left: `${state.offsetX}px`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [state.offsetX, state.transitionDuration]
  )
  return {
    opend: state.opend,
    containerStyle,
    handleTouchDown,
    handleTouchUp,
    handleTouchMove
  }
}
// ______________________________________________________
//
// @ exports

export { useSwipeItemOpener }
