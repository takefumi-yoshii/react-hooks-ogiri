import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  handleClose: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    onClick={props.handleClose}
  >
    <SVGInline svg={require('./assets/close.svg')} />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: absolute;
  top: -30px;
  right: 0px;
  cursor: pointer;
`
