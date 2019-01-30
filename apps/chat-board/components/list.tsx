import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ItemComponent from './item'
import { Item } from './item'
import { getTimeLabel } from '../../utils/index'

// ______________________________________________________
//
// @ Types

type Props = {
  items: Item[]
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const nodeRef = useRef({} as HTMLDivElement)
  const [items, updateItems] = useState<JSX.Element[]>([])
  useEffect(() => {
    if (nodeRef.current === null) return
    const {
      height
    } = nodeRef.current.getBoundingClientRect()
    window.scrollTo(0, height)
  })
  useEffect(
    () => {
      if (props.items.length === 0) return
      updateItems(_items => {
        const newItem = props.items[props.items.length - 1]
        _items.push(
          <ItemComponent
            key={newItem.createdAt.getTime()}
            createdAtLabel={getTimeLabel(newItem.createdAt)}
            message={newItem.message}
          />
        )
        return _items
      })
    },
    [props.items]
  )
  return (
    <div className={props.className} ref={nodeRef}>
      {items}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding-bottom: 60px;
  > * {
    margin: 16px 24px 16px 16px;
  }
`
