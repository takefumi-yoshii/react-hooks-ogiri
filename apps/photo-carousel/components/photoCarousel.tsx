import * as React from 'react'
import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  usePhotoCarousel,
  Options
} from './usePhotoCarousel'

// ______________________________________________________
//
// @ Types

type Props = {
  images: string[]
  onChangeCurrent?: (current: number) => void
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  const {
    current,
    renderItems,
    nodeStyle,
    containerStyle
  } = usePhotoCarousel({
    ref,
    images: props.images,
    imageRatio: props.imageRatio,
    transitionInterval: props.transitionInterval,
    transitionDuration: props.transitionDuration
  })
  useEffect(
    () => {
      if (props.onChangeCurrent === undefined) return
      props.onChangeCurrent(current)
    },
    [current]
  )
  return (
    <div
      className={props.className}
      style={nodeStyle}
      ref={ref}
    >
      <div style={containerStyle}>{renderItems}</div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)``
