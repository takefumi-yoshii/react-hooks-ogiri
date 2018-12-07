import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  RefObject
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  opened: boolean
  height: string | number
  defaultHeight: string | number
}
type Options = {
  transitionDuration: number
}
type Props = {
  ref: RefObject<HTMLElement>
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  opened: false,
  height: 'auto',
  defaultHeight: 'auto'
})
const defaultOptions = (): Options => ({
  transitionDuration: 200
})
// ______________________________________________________
//
// @ Hooks

const useDrillDown = (props: Props) => {
  const [state, update] = useState(defaultState())
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        transitionDuration: props.transitionDuration
      }),
    [props.transitionDuration]
  )
  const duration = useMemo(
    () => `${options.transitionDuration / 1000}s`,
    [options.transitionDuration]
  )
  const transitionDuration = useMemo(
    () =>
      state.defaultHeight !== 'auto' ? duration : '0s',
    [state.defaultHeight, duration]
  )
  const style = useMemo(
    () => ({
      height: state.height,
      transitionDuration
    }),
    [state.height, transitionDuration]
  )
  const handleOpen = useCallback(
    () => {
      update(_state => ({
        ..._state,
        opened: !state.opened
      }))
    },
    [state.opened]
  )
  useEffect(
    () => {
      if (props.ref.current === null) return
      const defaultHeight =
        state.defaultHeight === 'auto'
          ? props.ref.current.clientHeight
          : state.defaultHeight
      const height = state.opened ? defaultHeight : '0px'
      update(_state => ({
        ..._state,
        height,
        defaultHeight
      }))
    },
    [state.opened]
  )
  return {
    style,
    handleOpen
  }
}
// ______________________________________________________
//
// @ exports

export { useDrillDown }
