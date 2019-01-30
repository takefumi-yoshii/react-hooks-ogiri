import * as React from 'react'
import styled from 'styled-components'
import { useContext, useMemo, CSSProperties } from 'react'
import { CTX } from '../context'
import Photo from './photo'
import Description from './description'

// ______________________________________________________
//
// @ Types

type ContainerProps = {
  title: string
  subTitle: string
  avatorImgSrc: string
  bgImgSrc: string
  bgColor: string
}
type Props = {
  isHide: boolean
  nodeStyle: CSSProperties
  bgStyle: CSSProperties
  className?: string
} & ContainerProps
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="bg" style={props.bgStyle} />
    <div className="wrapper" style={props.nodeStyle}>
      <Photo
        isHide={props.isHide}
        imgSrc={props.avatorImgSrc}
      />
      <Description
        title={props.title}
        subTitle={props.subTitle}
        isHide={props.isHide}
      />
    </div>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${props => props.bgColor};
  > .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${props => props.bgImgSrc});
    background-position: center;
    background-size: cover;
  }
  > .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => {
  const { coefficient } = useContext(CTX)
  const isHide = useMemo(() => coefficient < 0.5, [
    coefficient
  ])
  const nodeStyle = useMemo(
    () => ({ height: 60 + coefficient * 150 }),
    [coefficient]
  )
  const bgStyle = useMemo(
    () => ({
      opacity: coefficient + 0.2,
      transform: `scale(${1 + coefficient * 0.2})`
    }),
    [coefficient]
  )
  return useMemo(
    () => (
      <StyledView
        isHide={isHide}
        bgStyle={bgStyle}
        nodeStyle={nodeStyle}
        {...props}
      />
    ),
    [isHide, nodeStyle, bgStyle]
  )
}
