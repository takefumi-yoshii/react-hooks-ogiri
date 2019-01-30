import * as React from 'react'
import styled from 'styled-components'
import * as styles from './styles'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="container">
      <h1>Page1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  ${styles.page} background: #cff;
`
export default () => <StyledView />
