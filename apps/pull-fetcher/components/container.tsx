import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import { usePullFetcher, State } from './usePullFetcher'

// ______________________________________________________
//
// @ Types

type Props = {
  renderChildren: (state: State) => any
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const {
    state,
    handleTouchDown,
    handleTouchUp,
    handleTouchMove
  } = usePullFetcher()
  return (
    <div
      className={props.className}
      onTouchStart={handleTouchDown}
      onTouchEnd={handleTouchUp}
      onTouchCancel={handleTouchUp}
      onTouchMove={handleTouchMove}
    >
      {useMemo(() => props.renderChildren(state), [
        state.offsetY,
        state.fetched
      ])}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  min-height: 100vh;
`
