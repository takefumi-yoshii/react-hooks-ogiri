import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles'
import List from './list/index'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  handleToggleOpen: () => void
  onChangeOpened?: (opened: boolean) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="menu" onClick={props.handleToggleOpen}>
      <SVGInline svg={require('./assets/menu.svg')} />
    </div>
    <div className="list">
      <List />
    </div>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 60px;
    right: -100vw;
    background-color: ${styles.darkBlue};
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    > * {
      margin-left: 20px;
    }
  }
`
