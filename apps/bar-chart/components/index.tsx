import * as React from 'react'
import styled from 'styled-components'
import { mockMultipleRecords } from './records'
import Provider from './provider'
import Chart from './chart/index'
import BgColumnRect from './chart/bgColumnRect'
import BgColumnLines from './chart/bgColumnLines'
import BgRowLines from './chart/bgRowLines'
import RecordsBars from './chart/recordsBars'
import HitAreas from './chart/hitAreas'
import BaseLines from './chart/baseLines'
import Info from './info'
// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const count = 2
  const columnCount = 28
  const rowCount = 20
  const max = 1000
  const width = 640
  const height = 256
  const multipleRecords = mockMultipleRecords(
    count,
    columnCount,
    max
  )
  return (
    <Provider
      rowCount={rowCount}
      columnCount={columnCount}
      max={max}
      width={width}
      height={height}
      multipleRecords={multipleRecords}
    >
      <div className={props.className}>
        <Chart>
          <BgColumnRect />
          <BgColumnLines />
          <BgRowLines />
          <RecordsBars />
          <HitAreas />
          <BaseLines />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
