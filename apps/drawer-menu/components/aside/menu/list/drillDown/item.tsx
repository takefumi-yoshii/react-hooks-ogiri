import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  onClick: (arg: any) => any
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) =>
  useMemo(
    () => (
      <li
        className={props.className}
        onClick={props.onClick}
      >
        {props.title}
      </li>
    ),
    [props.title]
  )
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 20px;
  font-size: 0.8rem;
  &:first-child {
    border-top: 1px dashed #63656d;
  }
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.03);
  }
`
