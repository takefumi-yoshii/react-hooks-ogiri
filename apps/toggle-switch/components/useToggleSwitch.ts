import {
  useState,
  useMemo,
  useCallback,
  useEffect,
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
  onChangeChecked: ((checked: boolean) => void) | null
}
type Props = Partial<State> & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  checked: false
})
const defaultOptions = (): Options => ({
  width: 50,
  height: 30,
  inactiveColor: '#eee',
  activeColor: '#4ed164',
  onChangeChecked: null
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
        activeColor: props.activeColor,
        onChangeChecked: props.onChangeChecked
      }),
    [
      props.width,
      props.height,
      props.inactiveColor,
      props.activeColor,
      props.onChangeChecked
    ]
  )
  const nodeStyle = useMemo(
    () => ({
      display: 'inline-block',
      position: 'relative' as 'relative',
      width: `${options.width}px`,
      height: `${options.height}px`
    }),
    [options.width, options.height]
  )
  const baseStyle = useMemo(
    () => ({
      display: ' block',
      width: '100%',
      transitionDuration: '0.2s',
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
      display: 'block',
      width: `${options.height - 4}px`,
      height: `${options.height - 4}px`,
      borderRadius: `${options.height}px`,
      position: 'absolute' as 'absolute',
      top: '2px',
      left: state.checked
        ? `${options.width - options.height + 2}px`
        : '2px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      transitionDuration: '0.2s'
    }),
    [state.checked, options.width, options.height]
  )
  const inputStyle = useMemo(
    () => ({
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute' as 'absolute',
      top: '0',
      left: '0',
      opacity: 0,
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent'
    }),
    []
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
  useEffect(
    () => {
      if (options.onChangeChecked === null) return
      options.onChangeChecked(state.checked)
    },
    [state.checked]
  )
  return {
    state,
    nodeStyle,
    baseStyle,
    knobStyle,
    inputStyle,
    handleToggle
  }
}
// ______________________________________________________
//
// @ exports

export { useToggleSwitch, defaultState, Options }
