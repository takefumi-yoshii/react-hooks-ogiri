import * as React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { CaptureContext } from '../contexts'
import VideoView from './videoView'
import CaptureView from './captureView'
import CaptureShutter from './captureShutter'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const {
    canvasRef,
    videoRef,
    width,
    height,
    handleCapture
  } = useContext(CaptureContext)
  return (
    <div className={props.className}>
      <VideoView
        className="videoView"
        videoRef={videoRef}
        width={width}
        height={height}
      />
      <CaptureView
        className="captureView"
        canvasRef={canvasRef}
        width={width}
        height={height}
      />
      <CaptureShutter
        className="captureShutter"
        handleCapture={handleCapture}
      />
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: relative;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  > .captureView {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: 2px solid #666;
    border-radius: 50px;
    overflow: hidden;
  }
  > .captureShutter {
    position: absolute;
    bottom: 10px;
    right: 10px;
    path {
      fill: #fff;
    }
  }
`
