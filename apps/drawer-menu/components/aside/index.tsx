import * as React from 'react'
import {
  useCallback,
  CSSProperties,
  Dispatch,
  SetStateAction
} from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
import { useDrawerMenu } from './useDrawerMenu'
import Menu from './menu/index'

// ______________________________________________________
//
// @ Types

type Props = {
  nodeStyle: CSSProperties
  containerStyle: CSSProperties
  handleToggleOpen: () => void
  handleTransitionEnd: () => void
  className?: string
}
type ContainerProps = {
  handleChangeOpened?: Dispatch<SetStateAction<boolean>>
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className} style={props.nodeStyle}>
    <div
      className="container"
      style={props.containerStyle}
      onTransitionEnd={props.handleTransitionEnd}
    >
      <Menu handleToggleOpen={props.handleToggleOpen} />
    </div>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  > .container {
    height: 100vh;
    position: relative;
    background-color: ${styles.darkBlue};
  }
`
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => {
  const {
    opened,
    nodeStyle,
    containerStyle,
    handleToggleOpen
  } = useDrawerMenu({ width: 240 })
  const handleTransitionEnd = useCallback(
    () => {
      if (props.handleChangeOpened !== undefined) {
        props.handleChangeOpened(opened)
      }
    },
    [props.handleChangeOpened, opened]
  )
  return (
    <StyledView
      nodeStyle={nodeStyle}
      containerStyle={containerStyle}
      handleToggleOpen={handleToggleOpen}
      handleTransitionEnd={handleTransitionEnd}
    />
  )
}
