import * as React from 'react'
import { useToggleSwitch } from './useToggleSwitch'

// ______________________________________________________
//
// @ Types

type Props = {
  width?: number
  height?: number
  inactiveColor?: string
  activeColor?: string
  defaultChecked?: boolean
  onChangeChecked?: (checked: boolean) => void
  className?: string
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const {
    state,
    nodeStyle,
    baseStyle,
    knobStyle,
    inputStyle,
    handleToggle
  } = useToggleSwitch({
    width: props.width,
    height: props.height,
    checked: props.defaultChecked,
    inactiveColor: props.inactiveColor,
    activeColor: props.activeColor,
    onChangeChecked: props.onChangeChecked
  })
  return (
    <div className={props.className} style={nodeStyle}>
      <span className="base" style={baseStyle} />
      <span className="knob" style={knobStyle} />
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={state.checked}
        style={inputStyle}
      />
    </div>
  )
}
