import * as React from 'react'
import { useRef } from 'react'
import {
  useStickyWrapper,
  Options
} from './useStickyWrapper'

// ______________________________________________________
//
// @ Types

type Props = {
  onEnter: () => void
  onLeave: () => void
  className?: string
  id: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  useStickyWrapper({
    ref,
    onEnter: props.onEnter,
    onLeave: props.onLeave,
    throttleInterval: props.throttleInterval
  })
  return (
    <div
      className={props.className}
      id={props.id}
      ref={ref}
    >
      {props.children}
    </div>
  )
}

export default View
