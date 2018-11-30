import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  icon: JSX.Element
  onClick: (arg: any) => any
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) =>
  useMemo(
    () => (
      <h3
        className={props.className}
        onClick={props.onClick}
      >
        <span className="icon">{props.icon}</span>
        <span className="title">{props.title}</span>
      </h3>
    ),
    [props.onClick]
  )
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 74px;
  padding: 0 14px;
  > .title {
    margin-left: 14px;
    font-weight: normal;
    font-size: 1rem;
  }
`
