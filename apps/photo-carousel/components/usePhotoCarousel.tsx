import * as React from 'react'
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
  imagesSize: number
  imageRatio: number
  transitionInterval: number
  transitionDuration: number
}
type Props = {
  ref: RefObject<HTMLElement>
  images: string[]
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
  imagesSize: 0,
  imageRatio: 0.66,
  transitionInterval: 4000,
  transitionDuration: 400
})
// ______________________________________________________
//
// @ Hooks

const usePhotoCarousel = (props: Props) => {
  const [state, update] = useState<State>(defaultState())
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        imagesSize: props.images.length,
        imageRatio: props.imageRatio,
        transitionInterval: props.transitionInterval,
        transitionDuration: props.transitionDuration
      }),
    [
      props.images,
      props.imageRatio,
      props.transitionInterval,
      props.transitionDuration
    ]
  )
  const renderItems = useMemo(
    () =>
      props.images.map((path, index) => (
        <p
          key={index}
          style={{
            width: `${state.width}px`,
            height: `${state.height}px`,
            position: 'absolute' as 'absolute',
            top: 0,
            left: `${state.width * index}px`,
            backgroundSize: 'cover',
            backgroundImage: `url(${path})`,
            backgroundPosition: 'center'
          }}
        />
      )),
    [props.images, state.width, state.height]
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
      width: `${options.imagesSize * 100}%`,
      height: `${state.height}px`,
      position: 'absolute' as 'absolute',
      top: 0,
      left: `${state.current * state.width * -1}px`,
      transitionDuration: `${options.transitionDuration /
        1000}s`
    }),
    [
      options.imagesSize,
      state.width,
      state.height,
      state.current,
      options.transitionDuration
    ]
  )
  useEffect(
    () => {
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
    },
    [props.ref, options.imageRatio]
  )
  useEffect(
    () => {
      const id = setInterval(() => {
        update(_state => {
          const current =
            _state.current === options.imagesSize - 1
              ? 0
              : _state.current + 1
          return { ..._state, current }
        })
      }, options.transitionInterval)
      return () => clearInterval(id)
    },
    [
      state.current,
      options.transitionInterval,
      options.transitionDuration
    ]
  )
  return {
    current: state.current,
    renderItems,
    nodeStyle,
    containerStyle
  }
}
// ______________________________________________________
//
// @ exports

export { usePhotoCarousel, Options }
