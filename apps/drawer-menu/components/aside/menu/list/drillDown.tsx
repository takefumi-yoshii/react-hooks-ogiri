import * as React from 'react'
import { useRef, useCallback } from 'react'
import styled from 'styled-components'
import { useDrillDown } from './useDrillDown'

// ______________________________________________________
//
// @ Types

type Item = {
  title: string
  onClick: () => void
}
type Props = {
  title: string
  icon: React.ReactChild
  items?: Item[]
  onClickTitle?: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
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
      <h3 onClick={handleClickTitle}>
        <span className="icon">{props.icon}</span>
        <span className="title">{props.title}</span>
      </h3>
      {props.items !== undefined && (
        <ul style={style} ref={ref}>
          {props.items.map((item, index) => (
            <li key={index} onClick={item.onClick}>
              {item.title}
            </li>
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
  > h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 74px;
    padding: 0 14px;
    > .title {
      margin-left: 14px;
      font-weight: normal;
      font-size: 1rem;
    }
  }
  > ul {
    overflow: hidden;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 30px;
      padding: 20px;
      font-size: 0.8rem;
      &:first-child {
        border-top: 1px dashed #63656d;
      }
      &:nth-child(even) {
        background: rgba(255, 255, 255, 0.03);
      }
    }
  }
`
