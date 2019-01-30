import * as React from 'react'
import {
  useContext,
  useMemo,
  ChangeEvent,
  MouseEvent
} from 'react'
import styled from 'styled-components'
import { DrawableCanvasContext } from '../contexts'
import Input from './input'
import Button from './button'

// ______________________________________________________
//
// @ Types

type Props = {
  fillColor: string
  handleChangeFillColor: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  handleClearRect: (
    event: MouseEvent<HTMLButtonElement>
  ) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <Input
      fillColor={props.fillColor}
      handleChangeFillColor={props.handleChangeFillColor}
    />
    <Button handleClearRect={props.handleClearRect} />
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  display: flex;
  justify-content: space-around;
`
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    fillColor,
    handleChangeFillColor,
    handleClearRect
  } = useContext(DrawableCanvasContext)
  return useMemo(
    () => (
      <StyledView
        fillColor={fillColor}
        handleChangeFillColor={handleChangeFillColor}
        handleClearRect={handleClearRect}
      />
    ),
    [fillColor]
  )
}
