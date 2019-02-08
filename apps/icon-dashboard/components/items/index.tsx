import * as React from 'react'
import { useContext } from 'react'
import { IconDashboardContext } from '../contexts'
import { Record } from '../records'
import Item from './item/index'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  width: number
  height: number
  itemPoints: { x: number; y: number }[][]
  holizontalCount: number
  verticalCount: number
  indexMapping: number[]
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {props.records.map((record, index) => {
      const elementIndex = props.indexMapping.findIndex(
        i => i === index
      )
      const yi = (elementIndex / props.holizontalCount) >> 0
      const xi = elementIndex % props.holizontalCount
      const { x, y } = props.itemPoints[yi][xi]
      return (
        <Item
          key={index}
          record={record}
          index={index}
          width={props.width}
          height={props.height}
          x={x}
          y={y}
        />
      )
    })}
  </div>
)
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    records,
    itemPoints,
    itemWidth,
    itemHeight,
    holizontalCount,
    verticalCount,
    indexMapping
  } = useContext(IconDashboardContext)
  if (itemWidth === 0) return <div />
  return (
    <View
      records={records}
      width={itemWidth}
      height={itemHeight}
      itemPoints={itemPoints}
      holizontalCount={holizontalCount}
      verticalCount={verticalCount}
      indexMapping={indexMapping}
    />
  )
}
