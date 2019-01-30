import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { VideoContext, CaptureContext } from './contexts'
import { useCapture } from './useCapture'
import { useVideo } from './useVideo'
import Finder from './finder/index'
import UI from './ui/index'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const videoRef = useRef({} as HTMLVideoElement)
  const canvasRef = useRef({} as HTMLCanvasElement)
  const width = 640
  const height = 640
  return (
    <div className={props.className}>
      <VideoContext.Provider
        value={useVideo({
          videoRef,
          width,
          height
        })}
      >
        <CaptureContext.Provider
          value={useCapture({
            videoRef,
            canvasRef,
            width,
            height
          })}
        >
          <Finder />
          <UI />
        </CaptureContext.Provider>
      </VideoContext.Provider>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  max-width: 480px;
  margin: 0 auto;
  padding: 40px;
`
