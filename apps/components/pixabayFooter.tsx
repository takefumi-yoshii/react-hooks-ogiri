import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <p className="poweredBy">powered by</p>
    <p>
      <a
        href="https://pixabay.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'https://pixabay.com/'}
      </a>
    </p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 40px;
  text-align: center;
  border-top: 1px solid #eee;
  background-color: #f2f2f5;
  > .poweredBy {
    color: #ccc;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
  a {
    color: #999;
  }
`
