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
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
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

export default View
