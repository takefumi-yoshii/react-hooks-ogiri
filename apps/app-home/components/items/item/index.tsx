import * as React from 'react'
import { useMemo } from 'react'
import { Record } from '../../records'
import ItemContainer from './container'
import ItemContent from './content'

// ______________________________________________________
//
// @ Types

type Props = {
  record: Record
  index: number
  width: number
  height: number
  x: number
  y: number
}
// ______________________________________________________
//
// @ View

export default (props: Props) => (
  <ItemContainer
    index={props.index}
    width={props.width}
    height={props.height}
    x={props.x}
    y={props.y}
  >
    {useMemo(
      () => (
        <ItemContent
          record={props.record}
          index={props.index}
        />
      ),
      [props.record, props.index]
    )}
  </ItemContainer>
)
