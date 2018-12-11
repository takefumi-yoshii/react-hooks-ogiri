import { Target } from '../../hooks/useIconDashboard'
// ______________________________________________________
//
// @ Types

type Props = {
  width: number
  height: number
  x: number
  y: number
  isMoveElement: boolean
  isMouseDown: boolean
  target: Target
}
// ______________________________________________________
//
// @ Helper

const getContainerStyle = (props: Props) => ({
  width: props.width,
  height: props.height,
  top: props.isMoveElement
    ? props.target.startRectPoint.y +
      props.target.pointOffset.y
    : props.y,
  left: props.isMoveElement
    ? props.target.startRectPoint.x +
      props.target.pointOffset.x
    : props.x,
  zIndex: props.isMoveElement ? 1 : 0,
  transitionDuration:
    props.isMoveElement && props.isMouseDown ? '0s' : '.4s',
  transitionProperty: 'top,left'
})
// ______________________________________________________
//
// @ exports

export { getContainerStyle }
