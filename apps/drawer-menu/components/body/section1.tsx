import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <section className={props.className}>
    <img src={require('./assets/eagle.jpg')} width="100%" />
    <div className="content">
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt et asperiores laudantium voluptatum,
        molestiae commodi tempora dolores excepturi sequi
        corrupti, consectetur ipsum dolorum doloremque
        fugiat dolor! Reprehenderit ex dolor placeat!
      </p>
    </div>
  </section>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .content {
    padding: 24px;
  }
`
