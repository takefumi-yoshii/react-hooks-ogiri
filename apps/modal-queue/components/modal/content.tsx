import * as React from 'react'
import styled from 'styled-components'
import { getTimeLabel } from '../../../utils/index'

// ______________________________________________________
//
// @ Types

type Props = {
  createdAt: Date
  message: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <h1>{props.message}</h1>
    <h3>created at : {getTimeLabel(props.createdAt)}</h3>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  min-width: 280px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`
