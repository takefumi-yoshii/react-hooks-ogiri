import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles'
import TitleNav from './titleNav'

// ______________________________________________________
//
// @ Types

type Props = {
  index: number
  title: string
  isEnter: boolean
  isLast: boolean
  isFirst: boolean
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <h2 className={props.className}>
    <span className="text">{props.title}</span>
    <TitleNav
      prev={`#section${props.index - 1}`}
      next={`#section${props.index + 1}`}
      isEnter={props.isEnter}
      isLast={props.isLast}
      isFirst={props.isFirst}
    />
  </h2>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: ${props =>
    props.isEnter ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition-duration: 0.4s;
  > .text {
    color: ${props =>
      props.isEnter ? styles.blue : '#000'};
    transform: ${props =>
      props.isEnter
        ? 'translateX(0px)'
        : 'translateX(10px)'};
    transition-duration: 0.4s;
    transform-origin: left center;
  }
`
