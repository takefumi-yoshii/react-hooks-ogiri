import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../styles'

// ______________________________________________________
//
// @ Types

type Props = {
  handlePlay: () => void
  queueCount: number
  isEnablePlayQueue: boolean
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <button onClick={props.handlePlay}>
      {props.isEnablePlayQueue
        ? 'PlayModalQueue'
        : '...waiting register'}
    </button>
    <p className="counter">
      Modal queue count : {props.queueCount}
    </p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  margin-top: 20px;
  padding: 16px 32px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  > button {
    padding: 12px 40px;
    color: #fff;
    border-radius: 5px;
    background-color: ${props =>
      props.isEnablePlayQueue ? styles.darkBlue : '#ccc'};
    outline: none;
    transition-duration: 0.2s;
    pointer-events: ${props =>
      props.isEnablePlayQueue ? 'inherit' : 'none'};
    &:hover {
      background-color: ${styles.darkBlueGray};
    }
  }
  > .counter {
    margin-top: 12px;
    text-align: center;
  }
`
