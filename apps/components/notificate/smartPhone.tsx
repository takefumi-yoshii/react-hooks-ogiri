import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../styles'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  message?: string
  className?: string
}

// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <SVGInline svg={require('./assets/smartphone.svg')} />
    <p className="text">
      {props.message || 'Please browse SmartPhone'}
    </p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${styles.darkBlue};
  > .text {
    margin-top: 16px;
    color: #fff;
  }
`
