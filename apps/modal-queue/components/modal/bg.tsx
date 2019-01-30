import * as React from 'react'
import { CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  style: CSSProperties
  onClick: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    style={props.style}
    onClick={props.onClick}
  />
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  transition-duration: 0.4s;
`
