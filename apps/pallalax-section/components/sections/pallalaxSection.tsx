import * as React from 'react'
import { useRef } from 'react'
import {
  usePallalaxSection,
  Options
} from './usePallalaxSection'

// ______________________________________________________
//
// @ Types

type Props = {
  toggleClassName: string
  children?: React.ReactNode
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  usePallalaxSection({
    ref,
    toggleClassName: props.toggleClassName,
    topThrethold: props.topThrethold,
    bottomThrethold: props.bottomThrethold,
    throttleInterval: props.throttleInterval
  })
  return (
    <section ref={ref} className={props.className}>
      {props.children}
    </section>
  )
}
