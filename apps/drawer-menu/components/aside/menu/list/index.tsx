import * as React from 'react'
import styled from 'styled-components'
import Home from './home'
import Profile from './profile'
import Groups from './groups'
import Settings from './settings'

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
    <Home />
    <Profile />
    <Groups />
    <Settings />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  > * {
    padding: 0px 10px;
    border-top: 1px solid #63656d;
    border-bottom: 1px solid #3b3e4a;
    &:last-child {
      border-bottom: none;
    }
  }
`
