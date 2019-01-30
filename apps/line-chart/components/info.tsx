import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import * as styles from '../../styles'
import { LineChartContext } from './contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  dateLabel: string
  amount: number
  top: number
  left: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <p className="dateLabel">{props.dateLabel}</p>
    <p className="amount">{props.amount}</p>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  padding: 5px;
  border: 1px solid ${styles.blue};
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  text-align: center;
  color: #fff;
  background-color: ${styles.darkBlue};
  transition-duration: 0.2s;
  pointer-events: none;
  > .dateLabel {
    font-size: 0.6rem;
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const { currentPoint } = useContext(LineChartContext)
  return useMemo(
    () => {
      if (currentPoint === null) return <div />
      const { dateLabel, amount } = currentPoint
      const top = currentPoint.y
      const left = currentPoint.x + 10
      return (
        <StyledView
          dateLabel={dateLabel}
          amount={amount}
          top={top}
          left={left}
        />
      )
    },
    [currentPoint]
  )
}
