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
  offsetX: number
  startX: number
  transitionDuration: number
  isTouchDown: boolean
  isShowOpener: boolean
  isOpend: boolean
}
type Options = {
  threshold: number
}
type Props = Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  offsetX: 0,
  startX: 0,
  transitionDuration: 0,
  isTouchDown: false,
  isShowOpener: false,
  isOpend: false
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
        if (_state.isOpend) return _state
        const startX = event.touches[0].clientX
        const isOpend =
          _state.isShowOpener && startX < options.threshold
        return {
          ..._state,
          startX,
          transitionDuration: 0,
          isTouchDown: true,
          isShowOpener: false,
          isOpend
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
        offsetX: _state.isShowOpener
          ? options.threshold
          : 0,
        startX: 0,
        transitionDuration: 200,
        isTouchDown: false
      }))
    },
    []
  )
  const handleTouchMove = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => {
        if (_state.isOpend) return _state
        const offsetX =
          event.touches[0].clientX - _state.startX
        if (offsetX < 0) return
        return {
          ..._state,
          offsetX,
          isTouchDown: false,
          isShowOpener: offsetX > options.threshold
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
    isOpend: state.isOpend,
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
