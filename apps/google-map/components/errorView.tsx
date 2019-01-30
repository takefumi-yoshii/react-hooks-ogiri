import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import SVGInline from 'react-svg-inline'

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
    <SVGInline svg={require('./assets/error.svg')} />
    <p className="text">現在位置取得に失敗しました</p>
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
  > .text {
    margin-top: 16px;
    color: #fff;
  }
`
