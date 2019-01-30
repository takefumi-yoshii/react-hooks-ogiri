import * as React from 'react'
import styled from 'styled-components'
import { Record } from '../../records'
import Icon from './icon'

// ______________________________________________________
//
// @ Types

type Props = {
  record: Record
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <Icon priority={props.record.priority} />
    <h3>{props.record.title}</h3>
    <p>{props.record.description}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 0;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background-color: #fafafa;
  > h3 {
    margin-right: 10px;
  }
`
