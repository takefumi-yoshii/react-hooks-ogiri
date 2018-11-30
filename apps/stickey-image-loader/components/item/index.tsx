import * as React from 'react'
import { useMemo } from 'react'
import { useImageLoader } from './useImageLoader'
import ScrollWrapper from './scrollWrapper'

// ______________________________________________________
//
// @ Types

type Props = {
  imgPath: string
  render: (
    props: {
      imgSrc: string
      loaded: boolean
      loadCompleted: boolean
      handleLoadCompleted: () => void
    }
  ) => JSX.Element
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const {
    state,
    handleLoadStart,
    handleDispose,
    handleLoadCompleted
  } = useImageLoader({
    imgPath: props.imgPath
  })
  return useMemo(
    () => (
      <ScrollWrapper
        onEnter={handleLoadStart}
        onLeave={handleDispose}
      >
        {props.render({
          imgSrc: state.img.src,
          loaded: state.loaded,
          loadCompleted: state.loadCompleted,
          handleLoadCompleted
        })}
      </ScrollWrapper>
    ),
    [state]
  )
}
