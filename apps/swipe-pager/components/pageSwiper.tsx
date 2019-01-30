import * as React from 'react'
import { useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { usePageSwiper, Options } from './usePageSwiper'

// ______________________________________________________
//
// @ Types

type Props = {
  pages: (() => JSX.Element)[]
  current?: number
  onChangePage?: (current: number) => void
  className?: string
} & Partial<Options>
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  const {
    current,
    isFirstPage,
    isLastPage,
    containerStyle,
    handleStartSwipe,
    handleMoveSwipe,
    handleEndSwipe
  } = usePageSwiper({
    ref,
    pages: props.pages,
    current: props.current,
    threshold: props.threshold,
    animationDuration: props.animationDuration
  })
  useEffect(
    () => {
      if (props.onChangePage === undefined) return
      props.onChangePage(current)
    },
    [current]
  )
  return (
    <div
      ref={ref}
      className={props.className}
      onTouchStart={handleStartSwipe}
      onTouchMove={handleMoveSwipe}
      onTouchEnd={handleEndSwipe}
      onTouchCancel={handleEndSwipe}
    >
      <div className="container" style={containerStyle}>
        <div className="page prev">
          {useMemo(
            () => {
              if (isFirstPage) return <div />
              return props.pages[current - 1]()
            },
            [current]
          )}
        </div>
        <div className="page current">
          {useMemo(() => props.pages[current](), [current])}
        </div>
        <div className="page next">
          {useMemo(
            () => {
              if (isLastPage) return <div />
              return props.pages[current + 1]()
            },
            [current]
          )}
        </div>
      </div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  > .container {
    width: 100%;
    height: 100%;
    position: absolute;
    > .page {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    > .page.prev {
      left: -100%;
    }
    > .page.current {
      left: 0%;
    }
    > .page.next {
      left: 100%;
    }
  }
`
