import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
  title: string
  dateLabel: string
  isOpend: boolean
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <h3 className="title">{props.title}</h3>
    <p className="dateLabel">{props.dateLabel}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > .title {
    margin: 0;
    font-size: 1rem;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      position: absolute;
      top: 6px;
      left: -14px;
      background-color: ${props =>
        props.isOpend ? 'transparent' : styles.blue};
    }
  }
  > .dateLabel {
    margin: 0;
    font-size: 0.8rem;
    color: #ccc;
  }
`
