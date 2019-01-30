import * as React from 'react'
import {
  useContext,
  useMemo,
  useCallback,
  useEffect
} from 'react'
// @ts-ignore
import throttle from 'lodash.throttle'
// @ts-ignore
import merge from 'lodash.merge'
import { CTX } from './context'

// ______________________________________________________
//
// @ Types

type Options = {
  threthold: number
  throttleInterval: number
}
type Props = {
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  threthold: 200,
  throttleInterval: 100
})
// ______________________________________________________
//
// @ Wrapper

const Wrapper: React.FC<Props> = props => {
  const { updateCoefficient } = useContext(CTX)
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        threthold: props.threthold,
        throttleInterval: props.throttleInterval
      }),
    [props.threthold, props.throttleInterval]
  )
  const handleScroll = useCallback(
    throttle(() => {
      const diff = options.threthold - window.scrollY
      const offset = diff > 0 ? diff : 0
      const coefficient = offset / options.threthold
      updateCoefficient(coefficient)
    }, props.throttleInterval),
    [options.threthold]
  )
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={props.className}>{props.children}</div>
  )
}

export default Wrapper
