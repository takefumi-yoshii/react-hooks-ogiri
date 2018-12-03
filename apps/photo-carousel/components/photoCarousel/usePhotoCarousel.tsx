import {
  useState,
  useEffect,
  useMemo,
  RefObject
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  current: number
  width: number
  height: number
}
type Options = {
  imagesCount: number
  imageRatio: number
  transitionInterval: number
  transitionDuration: number
  onChangeCurrent: ((current: number) => void) | null
}
type Props = {
  ref: RefObject<HTMLElement>
  imagesCount: number
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  current: 0,
  width: 0,
  height: 0
})
const defaultOptions = (): Options => ({
  imagesCount: 0,
  imageRatio: 0.66,
  transitionInterval: 4000,
  transitionDuration: 400,
  onChangeCurrent: null
})
// ______________________________________________________
//
// @ Hooks

const usePhotoCarousel = (props: Props) => {
  const [state, update] = useState<State>(defaultState())
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        imagesCount: props.imagesCount,
        imageRatio: props.imageRatio,
        transitionInterval: props.transitionInterval,
        transitionDuration: props.transitionDuration,
        onChangeCurrent: props.onChangeCurrent
      }),
    [
      props.imagesCount,
      props.imageRatio,
      props.transitionInterval,
      props.transitionDuration,
      props.onChangeCurrent
    ]
  )
  const nodeStyle = useMemo(
    () => ({
      width: '100%',
      paddingTop: `${options.imageRatio * 100}%`,
      overflow: 'hidden',
      position: 'relative' as 'relative'
    }),
    [options.imageRatio]
  )
  const containerStyle = useMemo(
    () => ({
      width: `${options.imagesCount * 100}%`,
      height: `${state.height}px`,
      position: 'absolute' as 'absolute',
      top: 0,
      left: `${state.current * state.width * -1}px`,
      transitionDuration: `${options.transitionDuration /
        1000}s`
    }),
    [
      options.imagesCount,
      state.width,
      state.height,
      state.current,
      options.transitionDuration
    ]
  )
  useEffect(() => {
    const handleResize = () => {
      if (props.ref.current === null) return
      const {
        width,
        height
      } = props.ref.current.getBoundingClientRect()
      update(_state => ({ ..._state, width, height }))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(
    () => {
      const id = setInterval(() => {
        update(_state => {
          const current =
            _state.current === options.imagesCount - 1
              ? 0
              : _state.current + 1
          return { ..._state, current }
        })
      }, options.transitionInterval)
      return () => clearInterval(id)
    },
    [options.transitionInterval]
  )
  useEffect(
    () => {
      if (options.onChangeCurrent === null) return
      options.onChangeCurrent(state.current)
    },
    [state.current]
  )
  return {
    current: state.current,
    itemWidth: state.width,
    itemHeight: state.height,
    nodeStyle,
    containerStyle
  }
}
// ______________________________________________________
//
// @ exports

export { usePhotoCarousel, Options }
