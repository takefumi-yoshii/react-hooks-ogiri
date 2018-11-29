import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  items: number[]
  current?: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    {props.items.map(i => (
      <span
        key={i}
        className={props.current === i ? 'current' : ''}
      />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  > .current {
    background-color: rgba(0, 0, 0, 0.6);
  }
`
