import * as React from 'react'
import { useMemo, CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  photoStyle: CSSProperties
  photoComponent: JSX.Element
  mounted: boolean
  transitionDuration: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const titleStyle = useMemo(
    () =>
      props.mounted
        ? {
            opacity: 1,
            transform: `translateY(0px)`
          }
        : {
            opacity: 0,
            transform: `translateY(10px)`
          },
    [props.mounted]
  )
  return (
    <div
      className={props.className}
      style={props.photoStyle}
    >
      {props.photoComponent}
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 0px;
  height: 0px;
  position: relative;
  overflow: hidden;
  h1 {
    width: 100%;
    padding: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    transition-duration: ${props =>
      props.transitionDuration / 1000}s;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`
