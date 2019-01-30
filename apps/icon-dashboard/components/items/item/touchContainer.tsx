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
    handleTouchStartElement,
    handleTouchMoveElement,
    handleTouchEndElement
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
    [target, props.width, props.height]
  )
  return useMemo(
    () => {
      return (
        <div
          className={props.className}
          style={style}
          onTouchStart={event =>
            handleTouchStartElement(event, props.index)
          }
          onTouchMove={handleTouchMoveElement}
          onTouchEnd={handleTouchEndElement}
          onTouchCancel={handleTouchEndElement}
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
