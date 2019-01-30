import * as React from 'react'
import { CSSProperties } from 'react'
import styled from 'styled-components'
import BtnClose from './btnClose'
import Content from './content'

// ______________________________________________________
//
// @ Types

type Props = {
  message: string
  createdAt: Date
  style: CSSProperties
  handleClose: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className} style={props.style}>
    <BtnClose handleClose={props.handleClose} />
    <Content
      createdAt={props.createdAt}
      message={props.message}
    />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  box-sizing: border-box;
  max-height: 90%;
  max-width: 90%;
  padding: 20px;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  transition-duration: 0.2s;
  transition-delay: 0.2s;
`
