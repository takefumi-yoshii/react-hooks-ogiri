import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import * as styles from '../../styles'

// ______________________________________________________
//
// @ Types

type Props = {
  handleSubmit: (value: string) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [value, setValue] = useState('')
  return (
    <form
      className={props.className}
      onSubmit={event => {
        event.preventDefault()
        if (value === '') return
        props.handleSubmit(value)
        setValue('')
      }}
    >
      <input
        type="text"
        placeholder="input some text."
        value={value}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
      <button>Register</button>
    </form>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > input[type='text'] {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0.8em;
    box-shadow: 1px 1px 5px inset rgba(0, 0, 0, 0.2);
    outline: none;
  }
  > button {
    padding: 0.8em;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${styles.darkBlue};
    outline: none;
    transition-duration: 0.2s;
    &:hover {
      background-color: ${styles.darkBlueGray};
    }
  }
`
