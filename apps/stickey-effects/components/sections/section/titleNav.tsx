import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  prev: string
  next: string
  isEnter: boolean
  isLast: boolean
  isFirst: boolean
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {!props.isFirst && (
      <a href={props.prev}>
        <SVGInline svg={require('./assets/up.svg')} />
      </a>
    )}
    {!props.isLast && (
      <a href={props.next}>
        <SVGInline svg={require('./assets/down.svg')} />
      </a>
    )}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  opacity: ${props => (props.isEnter ? 1 : 0)};
  transition-duration: 0.4s;
  transform: ${props =>
    props.isEnter
      ? 'translateX(0px)'
      : 'translateX(-10px)'};
  > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    svg path {
      fill: ${styles.blue};
    }
  }
`
