import * as React from 'react'
import { RefObject } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  videoRef: RefObject<HTMLVideoElement>
  width: number
  height: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <video
      ref={props.videoRef}
      width={props.width}
      height={props.height}
    />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  padding-top: ${props =>
    (props.height / props.width) * 100}%;
  line-height: 0;
  position: relative;
  background-color: #000;
  > video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
