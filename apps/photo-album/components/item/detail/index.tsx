import * as React from 'react'
import { useMemo, MouseEvent, CSSProperties } from 'react'
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

const View = (props: Props) => {
  return (
    <div className={props.className}>
      {!props.isOpened &&
        useMemo(
          () => (
            <>
              <div className="bg" style={props.bgStyle} />
              <div
                className="photo"
                style={props.photoStyle}
              >
                {props.photoComponent}
              </div>
            </>
          ),
          [props.photoStyle, props.bgStyle]
        )}
      {props.isOpened &&
        useMemo(
          () => (
            <Contents
              title={props.title}
              body={props.body}
              photoStyle={props.photoStyle}
              photoComponent={props.photoComponent}
              transitionDuration={props.transitionDuration}
              handleClose={props.handleClose}
            />
          ),
          [props.isOpened]
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
