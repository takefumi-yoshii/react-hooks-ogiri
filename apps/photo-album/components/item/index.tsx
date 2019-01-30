import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import Photo from './photo'
import Detail from './detail/index'
import { usePhotoDetail } from './usePhotoDetail'

// ______________________________________________________
//
// @ Types

type Props = {
  imgPath: string
  title: string
  body: string
  className?: string
}
// ______________________________________________________
//
// @ View

const transitionDuration = 400

const View: React.FC<Props> = props => {
  const {
    isOpen,
    isOpened,
    bgStyle,
    photoStyle,
    handleOpen,
    handleClose
  } = usePhotoDetail({ transitionDuration })
  const photoComponent = useMemo(
    () => <Photo imgPath={props.imgPath} />,
    [props.imgPath]
  )
  return (
    <div className={props.className}>
      <div className="photo" onClick={handleOpen}>
        {photoComponent}
      </div>
      {isOpen && (
        <Detail
          title={props.title}
          body={props.body}
          bgStyle={bgStyle}
          photoStyle={photoStyle}
          photoComponent={photoComponent}
          isOpened={isOpened}
          transitionDuration={transitionDuration}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .photo {
    padding-top: 100%;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }
`
