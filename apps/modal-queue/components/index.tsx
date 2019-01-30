import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import { useModalQueue } from './useModalQueue'
import Input from './input'
import PlayModalQueue from './playModalQueue'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const {
    state,
    renderModal,
    handleRegisterModal,
    handlePlayQueue
  } = useModalQueue()
  const isEnablePlayQueue = useMemo(
    () => state.items.length !== 0,
    [state.items]
  )
  return (
    <div className={props.className}>
      <Input handleSubmit={handleRegisterModal} />
      <PlayModalQueue
        handlePlay={handlePlayQueue}
        queueCount={state.items.length}
        isEnablePlayQueue={isEnablePlayQueue}
      />
      {state.isOpen && renderModal}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`
