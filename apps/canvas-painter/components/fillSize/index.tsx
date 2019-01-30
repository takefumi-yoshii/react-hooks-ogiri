import * as React from 'react'
import { useContext, useMemo, ChangeEvent } from 'react'
import styled from 'styled-components'
import { DrawableCanvasContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  fillSize: number
  handleChangeFillSize: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <p className="title">fill size</p>
    <input
      type="range"
      value={props.fillSize}
      onChange={props.handleChangeFillSize}
    />
    <p className="size">{props.fillSize}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 5px inset rgba(0, 0, 0, 0.2);
  > .title,
  > .size {
    padding: 0.8em;
  }
  > input {
    flex: 1 0 auto;
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const { fillSize, handleChangeFillSize } = useContext(
    DrawableCanvasContext
  )
  return useMemo(
    () => (
      <StyledView
        fillSize={fillSize}
        handleChangeFillSize={handleChangeFillSize}
      />
    ),
    [fillSize]
  )
}
