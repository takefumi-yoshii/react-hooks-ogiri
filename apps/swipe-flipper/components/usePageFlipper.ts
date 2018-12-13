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
  offsetR: number
  isTouchDown: boolean
  isProcessTransit: boolean
  transitionDuration: number
}
type Options = {
  threshold: number
  animationDuration: number
  perspective: number
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
  offsetR: 0,
  isTouchDown: false,
  isProcessTransit: false,
  transitionDuration: 0
})
const defaultOptions = (): Options => ({
  threshold: 90,
  animationDuration: 400,
  perspective: 2400
})
// ______________________________________________________
//
// @ Hooks

const usePageFlipper = (props: Props) => {
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
  const rotateY = useMemo(() => state.offsetR, [
    state.offsetR
  ])
  const transformPerspective = useMemo(
    () => `perspective(${options.perspective}px)`,
    [options.perspective]
  )
  const prevStyle = useMemo(
    () => ({
      zIndex: rotateY > -90 ? 1 : 0,
      transform: `${transformPerspective} rotateY(${rotateY}deg) scale(-1, 1) translateZ(0px)`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [
      rotateY,
      transformPerspective,
      state.transitionDuration
    ]
  )
  const nextStyle = useMemo(
    () => ({
      zIndex: rotateY < 90 ? 1 : 0,
      transform: `${transformPerspective} rotateY(${rotateY}deg) scale(-1, 1) translateZ(0px)`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [
      rotateY,
      transformPerspective,
      state.transitionDuration
    ]
  )
  const currentStyle = useMemo(
    () => ({
      zIndex: rotateY < 90 && rotateY > -90 ? 2 : 0,
      transform: `${transformPerspective} rotateY(${rotateY}deg) translateZ(1px)`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [
      rotateY,
      transformPerspective,
      state.transitionDuration
    ]
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
        const offsetR =
          event.touches[0].clientX - _state.startX
        if (offsetR < -180 || offsetR > 180) return _state
        if (isFirstPage && offsetR > 0) return _state
        if (isLastPage && offsetR < 0) return _state
        return { ..._state, offsetR }
      })
    },
    [isFirstPage, isLastPage]
  )
  const handleEndSwipe = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      if (
        props.ref.current === null ||
        state.isProcessTransit
      )
        return
      const isPrev = state.offsetR >= 0
      const shouldUpdatePage =
        Math.abs(state.offsetR) >= options.threshold
      let current = state.current
      let offsetR = 0
      if (isPrev && !isFirstPage && shouldUpdatePage) {
        current = current - 1
        offsetR = 180
      }
      if (!isPrev && !isLastPage && shouldUpdatePage) {
        current = current + 1
        offsetR = -180
      }
      updateState(_state => ({
        ..._state,
        offsetR,
        startX: 0,
        isProcessTransit: true,
        transitionDuration: options.animationDuration
      }))
      setTimeout(() => {
        updateState(_state => ({
          ..._state,
          current,
          offsetR: 0,
          isTouchDown: false,
          isProcessTransit: false,
          transitionDuration: 0
        }))
      }, options.animationDuration)
    },
    [state.isProcessTransit, state.offsetR]
  )
  return {
    current: state.current,
    isFirstPage,
    isLastPage,
    handleStartSwipe,
    handleMoveSwipe,
    handleEndSwipe,
    prevStyle,
    currentStyle,
    nextStyle
  }
}

export { usePageFlipper, Options }
