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

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <h2>Title</h2>
    <p className="body">
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Impedit laboriosam praesentium, ab distinctio
      quam quos sunt corporis iste rem vitae eum a illum
      doloremque necessitatibus quod esse. Eum, tempore
      illum.
    </p>
    <img
      src={require('../../assets/photo1.jpg')}
      width="100%"
    />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 24px;
  > h2 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  > .body {
    margin-bottom: 10px;
  }
`
