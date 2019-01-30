import * as React from 'react'
import { MouseEvent, CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  style: CSSProperties
  onMouseDown: (event: MouseEvent<HTMLElement>) => void
  onMouseMove: (event: MouseEvent<HTMLElement>) => void
  onMouseUp: (event: MouseEvent<HTMLElement>) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    style={props.style}
    onMouseDown={props.onMouseDown}
    onMouseMove={props.onMouseMove}
    onMouseUp={props.onMouseUp}
    onMouseLeave={props.onMouseUp}
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
