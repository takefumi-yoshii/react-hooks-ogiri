import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { useModal } from './useModal'
import Bg from './bg'
import Container from './container'
// ______________________________________________________
//
// @ Types

type Props = {
  message: string
  createdAt: Date
  handleClose: () => void
  bgColor?: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  const { bgStyle, modalStyle } = useModal({
    ref,
    bgColor: props.bgColor
  })
  return (
    <div className={props.className} ref={ref}>
      <Bg style={bgStyle} onClick={props.handleClose} />
      <Container
        createdAt={props.createdAt}
        handleClose={props.handleClose}
        message={props.message}
        style={modalStyle}
      />
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`
