import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  createdAtLabel: string
  message: string
  className?: string
}
export type Item = {
  createdAt: Date
  message: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [style, updateStyle] = useState({
    opacity: 0,
    transform: 'translateX(10px)'
  })
  useEffect(() => {
    updateStyle({
      opacity: 1,
      transform: 'translateX(0px)'
    })
  }, [])
  return (
    <div className={props.className} style={style}>
      <div className="wrapper">
        <p className="message">{props.message}</p>
        <p className="createdAtLabel">
          {props.createdAtLabel}
        </p>
      </div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  opacity: 0;
  text-align: right;
  transition-duration: 0.3s;
  transition-delay: 0.1s;
  > .wrapper {
    display: inline-block;
    padding: 8px 12px;
    position: relative;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.4);
    > .message {
      margin-bottom: 3px;
      font-size: 0.8rem;
      line-height: 1.2;
      word-break: break-all;
    }
    > .createdAtLabel {
      text-align: right;
      font-size: 0.6rem;
      color: #999;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      position: absolute;
      top: 60%;
      right: -16px;
      border-top: 4px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 8px solid #fff;
    }
  }
`
