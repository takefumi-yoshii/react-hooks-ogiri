import * as React from 'react'
import { useRef } from 'react'
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

export default (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  const {
    itemWidth,
    itemHeight,
    nodeStyle,
    containerStyle
  } = usePhotoCarousel({
    ref,
    imagesCount: props.images.length,
    imageRatio: props.imageRatio,
    transitionInterval: props.transitionInterval,
    transitionDuration: props.transitionDuration,
    onChangeCurrent: props.onChangeCurrent
  })
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
