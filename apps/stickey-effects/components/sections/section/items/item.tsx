import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <p className="icon" />
    <div className="body">
      <h3>{props.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </div>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
  > .icon {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    margin-right: 16px;
    border-radius: 30px;
    border: 2px solid #eee;
    background-color: #fafafa;
  }
  > .body p {
    font-size: 0.8rem;
  }
`
