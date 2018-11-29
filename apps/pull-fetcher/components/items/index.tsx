import * as React from 'react'
import { useState, useEffect } from 'react'
import { getTimeLabel } from '../../../utils/index'
import { Mail } from '../../mail'
import ItemComponent from './item'

// ______________________________________________________
//
// @ Types

type Props = {
  items: Mail[]
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const [items, updateItems] = useState<JSX.Element[]>([])
  useEffect(
    () => {
      if (props.items.length === 0) return
      updateItems(_items => {
        const newItem = props.items[0]
        _items.unshift(
          <ItemComponent
            key={newItem.id}
            title={newItem.title}
            dateLabel={getTimeLabel(newItem.date)}
            body={newItem.body}
          />
        )
        return _items
      })
    },
    [props.items]
  )
  return <>{items}</>
}
