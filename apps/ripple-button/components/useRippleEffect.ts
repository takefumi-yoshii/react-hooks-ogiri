import {
  useState,
  useMemo,
  useCallback,
  RefObject,
  MouseEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  opacity: number
  transformX: number
  transformY: number
  transformScale: number
  transitionDuration: number
  effectDuration: number
}
type Props = {
  ref: RefObject<HTMLElement>
} & Partial<State>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  opacity: 0,
  transformX: 0,
  transformY: 0,
  transformScale: 1,
  transitionDuration: 0,
  effectDuration: 1000
})
// ______________________________________________________
//
// @ Hooks

function useRippleEffect(props: Props) {
  const [state, update] = useState<State>(
    merge(defaultState(), { ...props })
  )
  const tx = useMemo(
    () => `translateX(${state.transformX}px)`,
    [state.transformX]
  )
  const ty = useMemo(
    () => `translateY(${state.transformY}px)`,
    [state.transformY]
  )
  const ts = useMemo(
    () => `scale(${state.transformScale})`,
    [state.transformScale]
  )
  const effectSytle = useMemo(
    () => ({
      opacity: state.opacity,
      transform: `${tx} ${ty} ${ts}`,
      transitionDuration: `${state.transitionDuration /
        1000}s`
    }),
    [state.opacity, tx, ty, ts, state.transitionDuration]
  )
  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.persist()
      update(_state => {
        if (props.ref.current === null) return _state
        const clickX = event.pageX
        const clickY = event.pageY
        const clientRect = props.ref.current.getBoundingClientRect()
        const positionX =
          clientRect.left + window.pageXOffset
        const positionY =
          clientRect.top + window.pageYOffset
        const transformX = clickX - positionX
        const transformY = clickY - positionY
        return {
          ..._state,
          opacity: 0.5,
          transformX,
          transformY,
          transformScale: 0,
          transitionDuration: 0
        }
      })
    },
    []
  )
  const handleMouseUp = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        opacity: 0,
        transformScale: 1,
        transitionDuration: _state.effectDuration
      }))
    },
    []
  )
  return {
    handleMouseDown,
    handleMouseUp,
    effectSytle
  }
}
// ______________________________________________________
//
// @ exports

export { useRippleEffect }
