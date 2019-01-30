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
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
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

export default View
