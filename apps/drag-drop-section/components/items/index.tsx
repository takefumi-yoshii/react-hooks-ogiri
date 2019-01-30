import * as React from 'react'
import styled from 'styled-components'
import { Record } from '../records'
import Provider from '../provider'
import ItemContainer from './item/container'
import ItemContent from './item/content'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  top: number
  left: number
  itemWidth: number
  itemHeight: number
  containerWidth: number
  containerHeight: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {props.records.map((record, index) => (
      <ItemContainer
        key={index}
        index={index}
        width={props.itemWidth}
        height={props.itemHeight}
      >
        <ItemContent record={record} />
      </ItemContainer>
    ))}
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

export default (props: Props) => (
  <Provider
    records={props.records}
    top={props.top}
    left={props.left}
    itemWidth={props.itemWidth}
    itemHeight={props.itemHeight}
  >
    <StyledView {...props} />
  </Provider>
)
