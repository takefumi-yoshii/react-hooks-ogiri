import * as React from 'react'
import {
  useState,
  useContext,
  useCallback,
  useMemo
} from 'react'
import styled from 'styled-components'
import { CTX } from '../../context'
import StickyWrapper from './stickyWrapper'
import Title from './title'
import Items from './items/index'

// ______________________________________________________
//
// @ Types

type ContainerProps = {
  index: number
  title: string
  isLast: boolean
  isFirst: boolean
}
type Props = {
  isEnter: boolean
  onEnter: () => void
  onLeave: () => void
  className?: string
} & ContainerProps
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <StickyWrapper
    id={`section${props.index}`}
    className={props.className}
    onEnter={props.onEnter}
    onLeave={props.onLeave}
  >
    <Title
      title={props.title}
      index={props.index}
      isEnter={props.isEnter}
      isLast={props.isLast}
      isFirst={props.isFirst}
    />
    <Items count={10} />
  </StickyWrapper>
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

export default (props: ContainerProps) => {
  const [isEnter, updateState] = useState(false)
  const { setCurrent } = useContext(CTX)
  const onEnter = useCallback(() => {
    updateState(true)
    setCurrent(_state => props.index)
  }, [])
  const onLeave = useCallback(() => {
    updateState(false)
  }, [])
  return useMemo(
    () => (
      <StyledView
        index={props.index}
        title={props.title}
        onEnter={onEnter}
        onLeave={onLeave}
        isEnter={isEnter}
        isLast={props.isLast}
        isFirst={props.isFirst}
      />
    ),
    [isEnter]
  )
}
