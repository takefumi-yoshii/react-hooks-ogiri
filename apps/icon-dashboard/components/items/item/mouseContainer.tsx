import * as React from 'react'
import { useMemo, useContext } from 'react'
import styled from 'styled-components'
import { IconDashboardContext } from '../../contexts'
import { getContainerStyle } from './getContainerStyle'
// ______________________________________________________
//
// @ Types

export type Props = {
  index: number
  width: number
  height: number
  x: number
  y: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const {
    isMouseDown,
    target,
    handleMouseDownElement,
    handleMouseMoveElement,
    handleMouseUpElement
  } = useContext(IconDashboardContext)
  const isMoveElement = useMemo(
    () => target.index === props.index,
    [target.index]
  )
  const style = useMemo(
    () =>
      getContainerStyle({
        width: props.width,
        height: props.height,
        x: props.x,
        y: props.y,
        isMouseDown,
        isMoveElement,
        target
      }),
    [props.width, props.height, props.x, props.y, target]
  )
  return useMemo(
    () => {
      return (
        <div
          className={props.className}
          style={style}
          onMouseDown={event =>
            handleMouseDownElement(event, props.index)
          }
          onMouseMove={handleMouseMoveElement}
          onMouseUp={handleMouseUpElement}
          onMouseLeave={handleMouseUpElement}
        >
          {props.children}
        </div>
      )
    },
    [isMoveElement, style]
  )
}
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  position: absolute;
  user-select: none;
  cursor: move;
  > * {
    pointer-events: none;
  }
`
export default (props: Props) => <StyledView {...props} />
