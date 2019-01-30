import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import { usePullFetcher, State } from './usePullFetcher'

// ______________________________________________________
//
// @ Types

type Props = {
  render: (state: State) => JSX.Element
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
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
      {useMemo(() => props.render(state), [
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
