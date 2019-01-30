import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  body: string
  mounted: boolean
  transitionDuration: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const nodeStyle = useMemo(
    () =>
      props.mounted
        ? {
            opacity: 1,
            transform: `translateY(0px)`
          }
        : {
            opacity: 0,
            transform: `translateY(-10px)`
          },
    [props.mounted]
  )
  return (
    <div className={props.className} style={nodeStyle}>
      <p>{props.body}</p>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 20px;
  transition-duration: ${props =>
    props.transitionDuration / 1000}s;
`
