import * as React from 'react'
import styled from 'styled-components'
import LoadingSpinner from '../../components/loadingSpinner'

// ______________________________________________________
//
// @ Types

type Props = {
  fetched: boolean
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div
    className={props.className}
    style={{
      height: !props.fetched ? '40px' : '0px'
    }}
  >
    <LoadingSpinner scale={0.4} />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  transition-duration: 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
`
