import * as React from 'react'
import styled from 'styled-components'
import { mockRecords } from './records'
import Provider from './provider'
import Chart from './chart/index'
import BgBaseLines from './chart/bgBaseLines'
import BgColumnLines from './chart/bgColumnLines'
import RecordsLine from './chart/recordsLine'
import RecordsCircles from './chart/recordsCircles'
import RecordsHitArea from './chart/recordsHitAreas'
import Info from './info'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const columnCount = 28
  const max = 100
  const width = 640
  const height = 256
  const records = mockRecords(columnCount, max)
  return (
    <Provider
      width={width}
      height={height}
      records={records}
    >
      <div className={props.className}>
        <Chart>
          <BgBaseLines />
          <BgColumnLines />
          <RecordsLine />
          <RecordsCircles />
          <RecordsHitArea />
        </Chart>
        <Info />
      </div>
    </Provider>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 640px;
  position: relative;
  margin: 0 auto;
`
