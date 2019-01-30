import * as React from 'react'
import styled from 'styled-components'
import Section1 from './section1'
import Section2 from './section2'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <Section1 />
    <Section2 />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > * {
    margin: 14px;
    background-color: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  }
`
