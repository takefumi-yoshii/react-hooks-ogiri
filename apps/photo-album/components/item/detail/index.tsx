import * as React from 'react'
import { MouseEvent, CSSProperties } from 'react'
import styled from 'styled-components'
import Contents from './contents/index'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  body: string
  bgStyle: CSSProperties
  photoStyle: CSSProperties
  photoComponent: JSX.Element
  isOpened: boolean
  transitionDuration: number
  handleClose: (event: MouseEvent<HTMLElement>) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      {!props.isOpened && (
        <>
          <div className="bg" style={props.bgStyle} />
          <div
            className="photo"
            style={props.photoStyle}
          >
            {props.photoComponent}
          </div>
        </>
      )}
      {props.isOpened && (
        <Contents
          title={props.title}
          body={props.body}
          photoStyle={props.photoStyle}
          photoComponent={props.photoComponent}
          transitionDuration={props.transitionDuration}
          handleClose={props.handleClose}
        />
      )}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  > .bg {
    width: 0px;
    height: 0px;
    position: fixed;
    background-color: #fff;
    transition-duration: ${props =>
      props.transitionDuration / 1000}s;
    z-index: 2;
  }
  > .photo {
    width: 0px;
    height: 0px;
    position: fixed;
    background-color: #ccc;
    transition-duration: ${props =>
      props.transitionDuration / 1000}s;
    z-index: 2;
  }
`
