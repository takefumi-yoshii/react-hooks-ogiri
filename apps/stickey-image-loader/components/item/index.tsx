import * as React from 'react'
import { useMemo } from 'react'
import { useStickeyImageLoader } from './useStickeyImageLoader'
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
    handleEnter,
    handleLeave,
    handleLoadCompleted
  } = useStickeyImageLoader({
    imgPath: props.imgPath
  })
  return useMemo(
    () => (
      <ScrollWrapper
        onEnter={handleEnter}
        onLeave={handleLeave}
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
