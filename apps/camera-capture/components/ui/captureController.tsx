import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  fileName: string
  handleSetFileName: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  handleSave: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <form
    className={props.className}
    onSubmit={event => {
      event.preventDefault()
      props.handleSave()
    }}
  >
    <input
      type="text"
      value={props.fileName}
      onChange={props.handleSetFileName}
      placeholder="input filename"
    />
    <button>
      <SVGInline svg={require('./assets/download.svg')} />
    </button>
  </form>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > input[type='text'] {
    padding: 0.8em;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 1px 1px 5px inset rgba(0, 0, 0, 0.2);
    outline: none;
  }
  > button {
    flex: 1 0 auto;
    width: 48px;
    padding: 9px 0;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${styles.darkBlue};
    outline: none;
    transition-duration: 0.2s;
    &:hover {
      background-color: ${styles.darkBlueGray};
    }
    svg path {
      fill: #ccc;
    }
  }
`
