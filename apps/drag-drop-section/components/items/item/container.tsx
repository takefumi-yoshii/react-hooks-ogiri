import * as React from 'react'
import { useMemo, useContext } from 'react'
import { DragDropContext } from '../../contexts'
import MouseView from './mouseView'
import TouchView from './touchView'

// ______________________________________________________
//
// @ Types

export type Props = {
  index: number
  width: number
  height: number
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ Container

export default (props: Props) => {
  const {
    isMouseDown,
    target,
    elementsIndex,
    handleMouseDownElement,
    handleMouseMoveElement,
    handleMouseUpElement,
    handleTouchStartElement,
    handleTouchMoveElement,
    handleTouchEndElement
  } = useContext(DragDropContext)
  return useMemo(
    () => {
      const isMoveElement = target.index === props.index
      const index = elementsIndex.findIndex(
        index => props.index === index
      )
      const x = 0
      const y = index * props.height
      const style = {
        width: props.width,
        height: props.height,
        top: isMoveElement
          ? target.startRectPoint.y + target.pointOffset.y
          : y,
        left: isMoveElement
          ? target.startRectPoint.x + target.pointOffset.x
          : x,
        zIndex: isMoveElement ? 1 : 0,
        transitionDuration:
          isMoveElement && isMouseDown ? '0s' : '.2s',
        transitionProperty: 'top,left'
      }
      if (window.ontouchstart === null) {
        return (
          <TouchView
            style={style}
            onTouchStart={event =>
              handleTouchStartElement(event, props.index)
            }
            onTouchMove={handleTouchMoveElement}
            onTouchEnd={handleTouchEndElement}
          >
            {props.children}
          </TouchView>
        )
      } else {
        return (
          <MouseView
            style={style}
            onMouseDown={event =>
              handleMouseDownElement(event, props.index)
            }
            onMouseMove={handleMouseMoveElement}
            onMouseUp={handleMouseUpElement}
          >
            {props.children}
          </MouseView>
        )
      }
    },
    [
      props.width,
      isMouseDown,
      target,
      elementsIndex,
      handleMouseDownElement,
      handleMouseMoveElement,
      handleMouseUpElement,
      handleTouchStartElement,
      handleTouchMoveElement,
      handleTouchEndElement
    ]
  )
}
