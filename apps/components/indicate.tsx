import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import { times } from '../utils/index'

// ______________________________________________________
//
// @ Types

const color = {
  dark: {
    default: 'rgba(0, 0, 0, 0.2)',
    current: 'rgba(0, 0, 0, 0.6)'
  },
  light: {
    default: 'rgba(255, 255, 255, 0.2)',
    current: 'rgba(255, 255, 255, 0.6)'
  }
}
type Props = {
  count: number
  color: keyof typeof color
  current?: number
  className?: string
}
// ______________________________________________________
//
// @ View

const Figure = (props: { isCurrent: boolean }) =>
  useMemo(
    () => (
      <span className={props.isCurrent ? 'current' : ''} />
    ),
    [props.isCurrent]
  )

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {times(props.count).map(i => (
      <Figure key={i} isCurrent={props.current === i} />
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
    background-color: ${props =>
      props.color === 'dark'
        ? color.dark.default
        : color.light.default};
  }
  > .current {
    background-color: ${props =>
      props.color === 'dark'
        ? color.dark.current
        : color.light.current};
  }
`
