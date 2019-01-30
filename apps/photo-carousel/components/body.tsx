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
  <div className={props.className}>
    <section>
      <h1>Title</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt et asperiores laudantium voluptatum,
        molestiae commodi tempora dolores excepturi sequi
        corrupti, consectetur ipsum dolorum doloremque
        fugiat dolor! Reprehenderit ex dolor placeat!
      </p>
    </section>
    <section>
      <h1>Title</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt et asperiores laudantium voluptatum,
        molestiae commodi tempora dolores excepturi sequi
        corrupti, consectetur ipsum dolorum doloremque
        fugiat dolor! Reprehenderit ex dolor placeat!
      </p>
    </section>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > section {
    padding: 24px;
    border-bottom: 1px solid #eee;
  }
`
