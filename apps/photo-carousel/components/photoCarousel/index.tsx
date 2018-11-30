import * as React from 'react'
import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  usePhotoCarousel,
  Options
} from './usePhotoCarousel'
import Item from './item'

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
    itemWidth,
    itemHeight,
    nodeStyle,
    containerStyle
  } = usePhotoCarousel({
    ref,
    imagesCount: props.images.length,
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
      <div style={containerStyle}>
        {props.images.map((path, index) => (
          <Item
            key={index}
            index={index}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            path={path}
          />
        ))}
      </div>
    </div>
  )
}

// ______________________________________________________
//
// @ StyledView

export default styled(View)``
