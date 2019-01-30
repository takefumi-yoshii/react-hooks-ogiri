import * as React from 'react'
import styled from 'styled-components'
import { useState, useMemo, useEffect, useRef } from 'react'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  subTitle: string
  isHide: boolean
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  const [height, setHeight] = useState<number | null>(null)
  useEffect(() => {
    if (ref.current === null) return
    const { height } = ref.current.getBoundingClientRect()
    setHeight(height)
  }, [])
  const nodeStyle = useMemo(
    () =>
      props.isHide
        ? { transform: `translateX(-40px)` }
        : { transform: `translateX(0px)` },
    [props.isHide]
  )
  const descriptionStyle = useMemo(
    () =>
      props.isHide
        ? {
            height: 0,
            opacity: 0,
            transform: `translateY(-100%)`,
            transitionDelay: '0s'
          }
        : {
            height: `${height}px`,
            opacity: 1,
            transform: `translateY(0%)`,
            transitionDelay: '.3s'
          },
    [props.isHide]
  )
  return useMemo(
    () => (
      <div className={props.className} style={nodeStyle}>
        <h2>{props.title}</h2>
        <div
          className="info"
          style={descriptionStyle}
          ref={ref}
        >
          <p className="subTitle">{props.subTitle}</p>
          <p className="updatedAt">
            updated at: 2018/10/10
          </p>
        </div>
      </div>
    ),
    [props.isHide]
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  color: #fff;
  transition-duration: 0.3s;
  .info {
    overflow: hidden;
    position: relative;
    transition-duration: 0.3s;
    transition-delay: 0.3s;
  }
  .subTitle {
  }
  .updatedAt {
    font-size: 0.8rem;
  }
`
