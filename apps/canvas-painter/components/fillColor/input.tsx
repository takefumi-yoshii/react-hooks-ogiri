import * as React from 'react'
import { useMemo, ChangeEvent, CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type ContainerProps = {
  fillColor: string
  handleChangeFillColor: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
}
type Props = {
  style: CSSProperties
  className?: string
} & ContainerProps
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className} style={props.style}>
    change fill color
    <input
      type="color"
      value={props.fillColor}
      onChange={props.handleChangeFillColor}
    />
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  flex: 1 0 auto;
  width: 175px;
  padding: 0.8em;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 1px 1px 5px inset rgba(0, 0, 0, 0.2);
  > input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
`
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => {
  const fontColor = useMemo(
    () => {
      const hex = props.fillColor.replace('#', '0x')
      const isDark = parseInt(hex) < 2 ** 24 / 2
      return isDark ? '#fff' : '#000'
    },
    [props.fillColor]
  )
  const style = useMemo(
    () => ({
      color: fontColor,
      backgroundColor: props.fillColor
    }),
    [props.fillColor]
  )
  return useMemo(
    () => <StyledView style={style} {...props} />,
    [style]
  )
}
