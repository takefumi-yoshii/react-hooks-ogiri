import {
  useState,
  useMemo,
  useEffect,
  RefObject
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type Options = {
  bgColor: string
}
type Props = {
  ref: RefObject<HTMLElement>
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  bgColor: 'rgba(0, 0, 0, .6)'
})
// ______________________________________________________
//
// @ Hooks

const useModal = (props: Props) => {
  const [state, update] = useState({
    opacity: 0,
    transform: 'scale(0.95)'
  })
  const options = useMemo(
    (): Options => merge(defaultOptions(), props),
    [props]
  )
  const bgStyle = useMemo(
    () => ({
      opacity: state.opacity,
      backgroundColor: options.bgColor
    }),
    [state.opacity, options.bgColor]
  )
  const modalStyle = useMemo(
    () => ({
      opacity: state.opacity,
      transform: state.transform
    }),
    [state.opacity, state.transform]
  )
  useEffect(
    () =>
      update(_state => ({
        ..._state,
        opacity: 1,
        transform: 'scale(1)'
      })),
    [props.ref]
  )
  return {
    bgStyle,
    modalStyle
  }
}
// ______________________________________________________
//
// @ exports

export { useModal }
