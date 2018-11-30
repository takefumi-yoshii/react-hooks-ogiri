import * as React from 'react'
import { useMemo, CSSProperties } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  imgSrc: string
  nodeStyle: CSSProperties
  className?: string
}
type ContainerProps = {
  isHide: boolean
  imgSrc: string
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <p className={props.className} style={props.nodeStyle} />
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  width: 60px;
  height: 60px;
  margin: 0 20px;
  border-radius: 60px;
  background-color: #fff;
  transition-duration: 0.3s;
  border: 2px solid #fff;
  background-image: url(${props => props.imgSrc});
  background-position: center;
  background-size: cover;
`
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => {
  const nodeStyle = useMemo(
    () => {
      return props.isHide
        ? {
            transform: `scale(.5) translateX(-30px)`
          }
        : { transform: `scale(1) translateX(0px)` }
    },
    [props.isHide]
  )
  return useMemo(
    () => (
      <StyledView
        nodeStyle={nodeStyle}
        imgSrc={props.imgSrc}
      />
    ),
    [nodeStyle]
  )
}
