import * as React from 'react'
import { SyntheticEvent } from 'react'
import styled from 'styled-components'
import LoadingSpinner from '../../../components/loadingSpinner'

// ______________________________________________________
//
// @ Types

type Props = {
  loaded: boolean
  onTransitionEnd: (
    event: SyntheticEvent<HTMLDivElement>
  ) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    onTransitionEnd={props.onTransitionEnd}
  >
    <LoadingSpinner scale={1} />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  transition-duration: 0.4s;
  opacity: ${props => (props.loaded ? 0 : 1)};
`
