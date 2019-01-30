import * as React from 'react'
import styled from 'styled-components'
import Canvas from './canvas'
import Brushes from './brushes'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <Canvas />
    <Brushes />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: relative;
  line-height: 0;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: none;
`
