import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  body: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 20px 10px;
`
