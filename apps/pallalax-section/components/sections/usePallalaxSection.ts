import {
  useState,
  useMemo,
  useEffect,
  RefObject
} from 'react'
// @ts-ignore
import throttle from 'lodash.throttle'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = 'OUTSIDE' | 'IN_AREA' | null
type Options = {
  topThrethold: number
  bottomThrethold: number
  throttleInterval: number
}
type Props = {
  ref: RefObject<HTMLElement>
  toggleClassName: string
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => null
const defaultOptions = (): Options => ({
  topThrethold: 100,
  bottomThrethold: 100,
  throttleInterval: 100
})
// ______________________________________________________
//
// @ Hooks

const usePallalaxSection = (props: Props) => {
  const [state, setCurrent] = useState<State>(
    defaultState()
  )
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        topThrethold: props.topThrethold,
        bottomThrethold: props.bottomThrethold,
        throttleInterval: props.throttleInterval
      }),
    [
      props.topThrethold,
      props.bottomThrethold,
      props.throttleInterval
    ]
  )
  useEffect(
    () => {
      const handleWindowScroll = throttle(() => {
        if (props.ref.current === null) return
        const {
          top,
          height
        } = props.ref.current.getBoundingClientRect()
        const topThrethold = options.topThrethold
        const bottomThrethold = options.bottomThrethold
        const offsetBottom = window.innerHeight - top
        const offsetTop = top + height
        const isOutOfBottom = offsetBottom < 0
        const isOutOfTop = offsetTop < 0
        const isInArea =
          !isOutOfBottom &&
          !isOutOfTop &&
          offsetBottom > bottomThrethold &&
          offsetTop > topThrethold
        if (isInArea) {
          setCurrent('IN_AREA')
        } else {
          setCurrent('OUTSIDE')
        }
      }, options.throttleInterval)
      handleWindowScroll()
      window.addEventListener('scroll', handleWindowScroll)
      return () =>
        window.removeEventListener(
          'scroll',
          handleWindowScroll
        )
    },
    [
      props.ref,
      options.topThrethold,
      options.bottomThrethold,
      options.throttleInterval
    ]
  )
  useEffect(
    () => {
      if (props.ref.current === null) return
      if (state === 'IN_AREA') {
        props.ref.current.classList.add(
          props.toggleClassName
        )
      } else {
        props.ref.current.classList.remove(
          props.toggleClassName
        )
      }
    },
    [props.ref, state]
  )
}
// ______________________________________________________
//
// @ exports

export { usePallalaxSection, Options }
