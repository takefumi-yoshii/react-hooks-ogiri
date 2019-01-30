import * as React from 'react'
import styled from 'styled-components'
import { Record } from '../../records'

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
    <div className="icon" />
    <p>{props.record.title}</p>
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
  position: absolute;
  width: 100%;
  height: 100%;
  > p {
    max-width: 80%;
    margin-top: 3px;
    font-size: 0.8rem;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  > .icon {
    width: 64px;
    height: 64px;
    background: url(${props => props.record.iconPath});
    background-size: 64px 64px;
    border-radius: 14px;
  }
`
