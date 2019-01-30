import * as React from 'react'
import { RefObject } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  canvasRef: RefObject<HTMLCanvasElement>
  width: number
  height: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <canvas
      ref={props.canvasRef}
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
  line-height: 0;
  background-color: #333;
  > canvas {
    width: 100%;
    height: ${props => (props.height / props.width) * 100}%;
  }
`
