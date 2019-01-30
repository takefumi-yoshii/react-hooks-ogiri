import * as React from 'react'
import Provider from './provider'
import styled from 'styled-components'
import Chart from './chart/index'
import BgCircles from './chart/bgCircles'
import BgLines from './chart/bgLines'
import RadarPolygon from './chart/radarPolygon'
import RadarCircles from './chart/radarCircles'
import ItemTexts from './chart/itemTexts'

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
      <Chart>
        <BgCircles />
        <BgLines />
        <RadarPolygon />
        <RadarCircles />
        <ItemTexts />
      </Chart>
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
  position: relative;
`
