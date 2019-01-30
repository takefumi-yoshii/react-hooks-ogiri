import * as React from 'react'
import { useMemo, MouseEvent } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  mounted: boolean
  transitionDuration: number
  handleClose: (event: MouseEvent<HTMLElement>) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const nodeStyle = useMemo(
    () =>
      props.mounted
        ? {
            opacity: 0.8,
            transform: `translateX(0px)`
          }
        : {
            opacity: 0,
            transform: `translateX(10px)`
          },
    [props.mounted]
  )
  return (
    <p
      className={props.className}
      style={nodeStyle}
      onClick={props.handleClose}
    />
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 20px;
  border: 2px solid #fff;
  background-color: #000;
  transition-duration: ${props =>
    props.transitionDuration / 1000}s;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -7px;
    margin-top: -1px;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
