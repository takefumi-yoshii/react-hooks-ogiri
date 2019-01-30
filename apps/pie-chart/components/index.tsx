import * as React from 'react'
import Provider from './provider'
import styled from 'styled-components'
import Chart from './chart/index'
import Pies from './chart/pies'
import CenterCircle from './chart/centerCircle'
import Scores from './elements/scores'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <Provider>
    <div className={props.className}>
      <div className="container">
        <Chart>
          <Pies />
          <CenterCircle />
        </Chart>
        <Scores />
      </div>
    </div>
  </Provider>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  > .container {
    padding-top: 100%;
    position: relative;
    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
