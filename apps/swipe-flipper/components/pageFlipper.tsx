import * as React from 'react'
import { useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { usePageFlipper, Options } from './usePageFlipper'

// ______________________________________________________
//
// @ Types

type Props = {
  pages: (() => JSX.Element)[]
  current?: number
  renderPrev: (index: number) => JSX.Element
  renderCurrent: (index: number) => JSX.Element
  renderNext: (index: number) => JSX.Element
  onChangePage?: (current: number) => void
  className?: string
} & Partial<Options>

// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  const {
    current,
    isFirstPage,
    isLastPage,
    prevStyle,
    currentStyle,
    nextStyle,
    handleStartSwipe,
    handleMoveSwipe,
    handleEndSwipe
  } = usePageFlipper({
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
      <div className="page prev" style={prevStyle}>
        {useMemo(
          () =>
            isFirstPage ? (
              <div />
            ) : (
              props.renderPrev(current - 1)
            ),
          [current]
        )}
      </div>
      <div className="page current" style={currentStyle}>
        {useMemo(() => props.renderCurrent(current), [
          current
        ])}
      </div>
      <div className="page next" style={nextStyle}>
        {useMemo(
          () =>
            isLastPage ? (
              <div />
            ) : (
              props.renderNext(current + 1)
            ),
          [current]
        )}
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
  > .page {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  > .page.prev {
    transform: rotateY(180deg);
  }
  > .page.current {
    transform: rotateY(0deg);
  }
  > .page.next {
    transform: rotateY(180deg);
  }
`
