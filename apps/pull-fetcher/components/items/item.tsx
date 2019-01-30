import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
  title: string
  dateLabel: string
  body: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <p>{props.dateLabel}</p>
    <p>{props.body}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #eee;
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #eee 20%,
    #eee 100%
  );
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  > p {
    margin: 0;
    line-height: 1.4;
    font-size: 0.8rem;
    color: #666;
  }
`
