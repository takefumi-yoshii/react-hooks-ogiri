import * as React from 'react'
import { useState } from 'react'
import Input from './input'
import List from './list'
import { Item } from './item'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const [items, updateItems] = useState<Item[]>([])
  return (
    <div className={props.className}>
      <List items={items} />
      <Input
        onCommitMessage={message => {
          const newItem: Item = {
            createdAt: new Date(),
            message
          }
          updateItems(_items => [...items, newItem])
        }}
      />
    </div>
  )
}
