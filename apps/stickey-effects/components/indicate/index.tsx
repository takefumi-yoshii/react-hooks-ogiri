import * as React from 'react'
import styled from 'styled-components'
import { times } from '../../../utils/index'
import Item from './item'

// ______________________________________________________
//
// @ Types

type Props = {
  count: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {times(props.count).map(index => (
      <Item key={index} index={index} />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 20px;
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
`
