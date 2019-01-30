import * as React from 'react'
import styled from 'styled-components'
import RippleButton from './rippleButton'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <RippleButton
      width={'180px'}
      heihgt={'64px'}
      borderRadius={'10px'}
      backgroundColor={'#7089b9'}
      effectSize={280}
    >
      <span className="children">
        <SVGInline svg={require('../assets/down1.svg')} />
        DOWNLOAD
      </span>
    </RippleButton>
    <RippleButton
      width={'160px'}
      heihgt={'64px'}
      borderRadius={'5px'}
      backgroundColor={'#009fff'}
      effectSize={160}
    >
      <span className="children">
        <SVGInline svg={require('../assets/up1.svg')} />
        UPLOAD
      </span>
    </RippleButton>
    <RippleButton
      width={'170px'}
      heihgt={'64px'}
      borderRadius={'37px'}
      backgroundColor={'#00d9ff'}
      effectSize={320}
    >
      <span className="children">
        <SVGInline svg={require('../assets/down2.svg')} />
        DOWNLOAD
      </span>
    </RippleButton>
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  > * {
    margin: 10px;
    > .children {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > * {
        margin-right: 10px;
      }
    }
  }
`
