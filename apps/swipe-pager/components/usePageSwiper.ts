import {
  useState,
  useMemo,
  useCallback,
  TouchEvent,
  RefObject
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  current: number
  startX: number
  offsetX: number
  isTouchDown: boolean
  isProcessTransit: boolean
  transitionDuration: number
}
type Options = {
  threshold: number
  animationDuration: number
}
type Props = {
  ref: RefObject<HTMLElement>
  pages: (() => JSX.Element)[]
  current?: number
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  current: 0,
  startX: 0,
  offsetX: 0,
  isTouchDown: false,
  isProcessTransit: false,
  transitionDuration: 0
})
const defaultOptions = (): Options => ({
  threshold: 100,
  animationDuration: 200
})
// ______________________________________________________
//
// @ Hooks

const usePageSwiper = (props: Props) => {
  const [state, updateState] = useState<State>(
    merge(defaultState(), { current: props.current })
  )
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        pages: props.pages,
        threshold: props.threshold,
        animationDuration: props.animationDuration
      }),
    [props.pages, props.threshold, props.animationDuration]
  )
  const isFirstPage = useMemo(() => state.current === 0, [
    state.current
  ])
  const isLastPage = useMemo(
    () => state.current === props.pages.length - 1,
    [state.current, props.pages]
  )
  const containerStyle = useMemo(
    () => ({
      transform: `translateX(${state.offsetX}px)`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [state.offsetX, state.transitionDuration]
  )
  const handleStartSwipe = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      updateState(_state => {
        if (_state.isProcessTransit) return _state
        const startX = event.touches[0].clientX
        return {
          ..._state,
          isTouchDown: true,
          transitionDuration: 0,
          startX
        }
      })
    },
    []
  )
  const handleMoveSwipe = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      updateState(_state => {
        if (!_state.isTouchDown || _state.isProcessTransit)
          return _state
        const offsetX =
          event.touches[0].clientX - _state.startX
        return { ..._state, offsetX }
      })
    },
    []
  )
  const handleEndSwipe = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      if (
        props.ref.current === null ||
        state.isProcessTransit
      )
        return
      const isPrev = state.offsetX >= 0
      const shouldUpdatePage =
        Math.abs(state.offsetX) >= options.threshold
      const {
        width
      } = props.ref.current.getBoundingClientRect()
      let current = state.current
      let offsetX = 0
      if (isPrev && !isFirstPage && shouldUpdatePage) {
        current = current - 1
        offsetX = width * 1
      }
      if (!isPrev && !isLastPage && shouldUpdatePage) {
        current = current + 1
        offsetX = width * -1
      }
      updateState(_state => ({
        ..._state,
        offsetX,
        startX: 0,
        isProcessTransit: true,
        transitionDuration: options.animationDuration
      }))
      setTimeout(() => {
        updateState(_state => ({
          ..._state,
          current,
          offsetX: 0,
          isTouchDown: false,
          isProcessTransit: false,
          transitionDuration: 0
        }))
      }, options.animationDuration)
    },
    [state.isProcessTransit, state.offsetX]
  )
  return {
    current: state.current,
    isFirstPage,
    isLastPage,
    handleStartSwipe,
    handleMoveSwipe,
    handleEndSwipe,
    containerStyle
  }
}
// ______________________________________________________
//
// @ exports

export { usePageSwiper, Options }
