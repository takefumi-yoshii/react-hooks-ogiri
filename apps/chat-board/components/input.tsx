import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  onCommitMessage: (message: string) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [inputText, updateText] = useState('')
  return (
    <form
      className={props.className}
      onSubmit={e => {
        e.preventDefault()
        if (inputText === '') return
        props.onCommitMessage(inputText)
        updateText('')
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={event => {
          updateText(event.target.value)
        }}
      />
      <button>
        <span>
          <SVGInline svg={require('../assets/write.svg')} />
        </span>
      </button>
    </form>
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
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  > input[type='text'] {
    flex: 1 0 auto;
    margin-right: 10px;
    padding: 10px;
    border-radius: 3px;
    font-size: 0.8rem;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  > button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    outline: none;
    -webkit-tap-highlight-color: transparent;
    svg path {
      fill: #999;
    }
  }
`
