import * as React from 'react'
import styled from 'styled-components'
import Provider from './provider'
import Canvas from './canvas/index'
import FillSize from './fillSize/index'
import FillColor from './fillColor/index'
import SaveFile from './saveFile/index'

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
  <Provider>
    <div className={props.className}>
      <Canvas />
      <div className="chrome">
        <FillSize />
        <FillColor />
        <SaveFile />
      </div>
    </div>
  </Provider>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 315px;
  padding: 30px 0;
  margin: 0 auto;
  > .chrome {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    > * {
      margin-bottom: 12px;
    }
  }
`
