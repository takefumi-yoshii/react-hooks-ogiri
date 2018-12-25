import {
  useState,
  useMemo,
  useCallback,
  MouseEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type Options = {
  transitionDuration: number
}
type Props = Partial<Options>
type State = {
  isOpen: boolean
  isOpened: boolean
  defaultRect: Partial<DOMRect> | null
  bgRect: Partial<DOMRect> | null
  photoRect: Partial<DOMRect> | null
}
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  isOpen: false,
  isOpened: false,
  defaultRect: null,
  bgRect: null,
  photoRect: null
})
const defaultOptions = (): Options => ({
  transitionDuration: 400
})
// ______________________________________________________
//
// @ Hooks

const usePhotoDetail = (props: Props) => {
  const [state, update] = useState<State>(defaultState())
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        transitionDuration: props.transitionDuration
      }),
    [props.transitionDuration]
  )
  const bgStyle = useMemo(
    () =>
      state.bgRect === null
        ? {}
        : {
            width: `${state.bgRect.width}px`,
            height: `${state.bgRect.height}px`,
            top: `${state.bgRect.top}px`,
            left: `${state.bgRect.left}px`
          },
    [state.bgRect]
  )
  const photoStyle = useMemo(
    () =>
      state.photoRect === null
        ? {}
        : {
            width: `${state.photoRect.width}px`,
            height: `${state.photoRect.height}px`,
            top: `${state.photoRect.top}px`,
            left: `${state.photoRect.left}px`
          },
    [state.photoRect]
  )
  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      event.preventDefault()
    },
    []
  )
  const handleOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect() as DOMRect
      window.addEventListener(
        'touchmove',
        handleTouchMove,
        { passive: false }
      )
      update(_state => ({
        ..._state,
        defaultRect: rect,
        photoRect: rect,
        bgRect: rect,
        isOpen: true
      }))
      setTimeout(() => {
        update(_state => ({
          ..._state,
          photoRect: {
            width: window.innerWidth,
            height: window.innerWidth,
            top: 0,
            left: 0
          },
          bgRect: {
            width: window.innerWidth,
            height: window.innerHeight,
            top: 0,
            left: 0
          }
        }))
      }, 16)
      setTimeout(() => {
        update(_state => ({ ..._state, isOpened: true }))
      }, options.transitionDuration)
    },
    [state.bgRect, state.photoRect, options]
  )
  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      update(_state => ({ ..._state, isOpened: false }))
      setTimeout(() => {
        update(_state => ({
          ..._state,
          photoRect: _state.defaultRect,
          bgRect: _state.defaultRect
        }))
      }, 16)
      setTimeout(() => {
        update(_state => ({ ..._state, isOpen: false }))
        window.removeEventListener(
          'touchmove',
          handleTouchMove as any,
          { passive: false } as any
        )
      }, options.transitionDuration)
    },
    [state.bgRect, state.photoRect, options]
  )
  return {
    isOpen: state.isOpen,
    isOpened: state.isOpened,
    bgStyle,
    photoStyle,
    handleOpen,
    handleClose
  }
}
// ______________________________________________________
//
// @ exports

export { usePhotoDetail }
