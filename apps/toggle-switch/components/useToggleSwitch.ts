import {
  useState,
  useMemo,
  useCallback,
  ChangeEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  checked: boolean
}
type Options = {
  width: number
  height: number
  inactiveColor: string
  activeColor: string
}
type Props = Partial<State> & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  checked: false
})
const defaultOptions = (): Options => ({
  width: 80,
  height: 40,
  inactiveColor: '#eee',
  activeColor: '#4ed164'
})
// ______________________________________________________
//
// @ Hooks

function useToggleSwitch(props: Props) {
  const [state, update] = useState<State>(
    merge(defaultState(), { checked: props.checked })
  )
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        width: props.width,
        height: props.height,
        inactiveColor: props.inactiveColor,
        activeColor: props.activeColor
      }),
    [
      props.width,
      props.height,
      props.inactiveColor,
      props.activeColor
    ]
  )
  const nodeStyle = useMemo(
    () => ({
      width: `${options.width}px`,
      height: `${options.height}px`
    }),
    [options.width, options.height]
  )
  const baseStyle = useMemo(
    () => ({
      height: `${options.height}px`,
      borderRadius: `${options.height}px`,
      backgroundColor: state.checked
        ? options.activeColor
        : options.inactiveColor
    }),
    [
      state.checked,
      options.height,
      options.activeColor,
      options.inactiveColor
    ]
  )
  const knobStyle = useMemo(
    () => ({
      width: `${options.height - 4}px`,
      height: `${options.height - 4}px`,
      borderRadius: `${options.height}px`,
      left: state.checked
        ? `${options.width - options.height + 2}px`
        : '2px'
    }),
    [state.checked, options.width, options.height]
  )
  const handleToggle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist()
      update(_state => ({
        ..._state,
        checked: event.target.checked
      }))
    },
    []
  )
  return {
    state,
    nodeStyle,
    baseStyle,
    knobStyle,
    handleToggle
  }
}
// ______________________________________________________
//
// @ exports

export { useToggleSwitch, defaultState, Options }
