import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'

// ______________________________________________________
//
// @ Types

type Props = {
  fileName: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <button className={props.className}>save file</button>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  flex: 0 0 auto;
  width: 140px;
  padding: 0.8em 0;
  color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${styles.darkBlue};
  outline: none;
  transition-duration: 0.2s;
  &:hover {
    background-color: ${styles.darkBlueGray};
  }
`
