import * as React from 'react'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  fileName: string
  onChangeFileName: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <input
    className={props.className}
    type="text"
    value={props.fileName}
    placeholder="input file name"
    onChange={props.onChangeFileName}
  />
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  flex: 1 0 auto;
  width: 175px;
  padding: 0.8em;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 1px 1px 5px inset rgba(0, 0, 0, 0.2);
  outline: none;
`
