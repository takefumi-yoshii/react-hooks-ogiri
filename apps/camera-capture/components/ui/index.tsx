import * as React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { CaptureContext } from '../contexts'
import VideoController from './videoController'
import CaptureController from './captureController'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }

// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const {
    state,
    handleSetFileName,
    handleSave
  } = useContext(CaptureContext)
  return (
    <div className={props.className}>
      <VideoController className="videoController" />
      <CaptureController
        className="captureController"
        fileName={state.fileName}
        handleSetFileName={handleSetFileName}
        handleSave={handleSave}
      />
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  > .videoController {
    width: 100%;
  }
  > .captureController {
    flex: 1 0 auto;
    margin-left: 10px;
  }
`
