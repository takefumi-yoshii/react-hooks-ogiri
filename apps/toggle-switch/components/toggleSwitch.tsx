import * as React from 'react'
import styled from 'styled-components'
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

const View = (props: Props) => {
  const {
    state,
    nodeStyle,
    baseStyle,
    knobStyle,
    handleToggle
  } = useToggleSwitch({
    width: props.width,
    height: props.height,
    checked: props.defaultChecked,
    inactiveColor: props.inactiveColor,
    activeColor: props.activeColor
  })
  return (
    <div className={props.className} style={nodeStyle}>
      <span className="base" style={baseStyle} />
      <span className="knob" style={knobStyle} />
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={state.checked}
      />
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: inline-block;
  position: relative;
  > .base {
    display: block;
    width: 100%;
    transition-duration: 0.2s;
  }
  > .knob {
    display: block;
    position: absolute;
    top: 2px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition-duration: 0.2s;
  }
  > input[type='checkbox'] {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`
