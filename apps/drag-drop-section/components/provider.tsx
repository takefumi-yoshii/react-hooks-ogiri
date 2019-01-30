import * as React from 'react'
import { IconDashboardContext } from './contexts'
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
}
// ______________________________________________________
//
// @ View

const Provider: React.FC<Props> = props => {
  const value = useDragDropContainer({
    records: props.records,
    top: props.top,
    left: props.left,
    itemWidth: props.itemWidth,
    itemHeight: props.itemHeight
  })
  return (
    <IconDashboardContext.Provider value={value}>
      {props.children}
    </IconDashboardContext.Provider>
  )
}

export default Provider
