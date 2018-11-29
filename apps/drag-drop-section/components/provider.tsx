import * as React from 'react'
import { DragDropContext } from './contexts'
import { Record } from './records'
import { useDragDropContainer } from './useDragDropContainer'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  top: number
  left: number
  itemWidth: number
  itemHeight: number
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const value = useDragDropContainer({
    records: props.records,
    top: props.top,
    left: props.left,
    itemWidth: props.itemWidth,
    itemHeight: props.itemHeight
  })
  return (
    <DragDropContext.Provider value={value}>
      {props.children}
    </DragDropContext.Provider>
  )
}
