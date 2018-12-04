import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { DragDropContext } from '../contexts'
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
  elementsIndex: number[]
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    {props.records.map((record, index) => {
      const elementIndex = props.elementsIndex.findIndex(
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
// @ StyledView

const StyledView = styled(View)`
  position: relative;
`
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
    elementsIndex
  } = useContext(DragDropContext)
  if (itemWidth === 0) return <div />
  return useMemo(
    () => (
      <StyledView
        records={records}
        width={itemWidth}
        height={itemHeight}
        itemPoints={itemPoints}
        holizontalCount={holizontalCount}
        verticalCount={verticalCount}
        elementsIndex={elementsIndex}
      />
    ),
    [
      records,
      itemWidth,
      itemHeight,
      holizontalCount,
      verticalCount,
      elementsIndex
    ]
  )
}
