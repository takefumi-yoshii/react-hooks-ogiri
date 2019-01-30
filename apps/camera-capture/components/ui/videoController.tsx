import * as React from 'react'
import { useMemo, useContext } from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
import { VideoContext } from '../contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const { state, handlePlay, handlePause } = useContext(
    VideoContext
  )
  return (
    <div className={props.className}>
      {useMemo(
        () => {
          if (!state.canplay) {
            return <p>...connecting</p>
          } else if (!state.playing) {
            return (
              <button onClick={handlePlay}>start</button>
            )
          } else if (state.playing) {
            return (
              <button onClick={handlePause}>pause</button>
            )
          }
          return
        },
        [state.canplay, state.playing]
      )}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > * {
    width: 100%;
    padding: 0.6em;
    text-align: center;
    color: #fff;
  }
  > button {
    padding: 0.8em;
    border-radius: 5px;
    background-color: ${styles.darkBlue};
    outline: none;
    transition-duration: 0.2s;
    &:hover {
      background-color: ${styles.darkBlueGray};
    }
  }
  > p {
    background-color: #ccc;
  }
`
