import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  handleCapture: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <button onClick={props.handleCapture}>
      <SVGInline svg={require('./assets/camera.svg')} />
    </button>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  > button {
    outline: none;
  }
`
