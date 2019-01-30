import * as React from 'react'
import { TouchEvent, CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  style: CSSProperties
  onTouchStart: (event: TouchEvent<HTMLElement>) => void
  onTouchMove: (event: TouchEvent<HTMLElement>) => void
  onTouchEnd: (event: TouchEvent<HTMLElement>) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    style={props.style}
    onTouchStart={props.onTouchStart}
    onTouchMove={props.onTouchMove}
    onTouchEnd={props.onTouchEnd}
    onTouchCancel={props.onTouchEnd}
  >
    {props.children}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: absolute;
  user-select: none;
  cursor: move;
  > * {
    pointer-events: none;
  }
`
