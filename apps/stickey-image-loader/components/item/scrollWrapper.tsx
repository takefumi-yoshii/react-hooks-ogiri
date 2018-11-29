import * as React from 'react'
import { useRef } from 'react'
import {
  useScrollWrapper,
  Options
} from './useScrollWrapper'

// ______________________________________________________
//
// @ Types

type Props = {
  onEnter: () => void
  onLeave: () => void
  children?: React.ReactNode
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  useScrollWrapper({
    ref,
    onEnter: props.onEnter,
    onLeave: props.onLeave,
    throttleInterval: props.throttleInterval
  })
  return (
    <div className={props.className} ref={ref}>
      {props.children}
    </div>
  )
}
