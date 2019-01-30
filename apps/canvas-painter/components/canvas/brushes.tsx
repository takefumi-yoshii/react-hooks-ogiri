import * as React from 'react'
import { useContext, useMemo, CSSProperties } from 'react'
import styled from 'styled-components'
import { DrawableCanvasContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  style: CSSProperties
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <p className={props.className} style={props.style} />
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  position: absolute;
  border: 1px dashed #ccc;
  pointer-events: none;
`
// ______________________________________________________
//
// @ Container

export default () => {
  const { fillSize, mouseX, mouseY } = useContext(
    DrawableCanvasContext
  )
  const style = useMemo(
    () => ({
      width: fillSize * 2,
      height: fillSize * 2,
      top: mouseY / window.devicePixelRatio,
      left: mouseX / window.devicePixelRatio,
      marginLeft: fillSize * -1,
      marginTop: fillSize * -1,
      borderRadius: fillSize * 2
    }),
    [fillSize, mouseX, mouseY]
  )
  return useMemo(() => <StyledView style={style} />, [
    style
  ])
}
