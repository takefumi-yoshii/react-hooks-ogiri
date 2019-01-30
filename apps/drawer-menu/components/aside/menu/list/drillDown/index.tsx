import * as React from 'react'
import { useRef, useCallback } from 'react'
import styled from 'styled-components'
import { useDrillDown } from './useDrillDown'
import Head from './head'
import Item from './item'

// ______________________________________________________
//
// @ Types

type Item = {
  title: string
  onClick: () => void
}
type Props = {
  title: string
  icon: JSX.Element
  items?: Item[]
  onClickTitle?: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLUListElement)
  const { style, handleOpen } = useDrillDown({ ref })
  const handleClickTitle = useCallback(
    () => {
      if (props.onClickTitle !== undefined)
        return props.onClickTitle()
      handleOpen()
    },
    [props.onClickTitle, style]
  )
  return (
    <div className={props.className}>
      <Head
        title={props.title}
        icon={props.icon}
        onClick={handleClickTitle}
      />
      {props.items !== undefined && (
        <ul ref={ref} style={style}>
          {props.items.map((item, index) => (
            <Item
              key={index}
              onClick={item.onClick}
              title={item.title}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  color: #fff;
  > ul {
    overflow: hidden;
  }
`
