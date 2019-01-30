import * as React from 'react'
import { useMemo } from 'react'
import { Record } from '../../records'
import MouseContainer from './mouseContainer'
import TouchContainer from './touchContainer'
import ItemContent from './content'

// ______________________________________________________
//
// @ Types

type ContainerProps = {
  record: Record
  index: number
  width: number
  height: number
  x: number
  y: number
}
type Props = {
  Container: (
    props: ContainerProps
  ) => React.ReactElement<ContainerProps>
} & ContainerProps
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <props.Container
    record={props.record}
    index={props.index}
    width={props.width}
    height={props.height}
    x={props.x}
    y={props.y}
  >
    {useMemo(
      () => (
        <ItemContent record={props.record} />
      ),
      [props.record]
    )}
  </props.Container>
)
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => (
  <View
    Container={
      window.ontouchstart === null
        ? TouchContainer
        : MouseContainer
    }
    {...props}
  />
)
