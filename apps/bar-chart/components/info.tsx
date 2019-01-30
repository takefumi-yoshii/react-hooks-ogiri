import * as React from 'react'
import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import * as styles from '../../styles'
import { BarChartContext } from './contexts'

// ______________________________________________________
//
// @ Types

type Props = {
  dateLabel: string
  amounts: string
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
    <p
      className="amounts"
      dangerouslySetInnerHTML={{ __html: props.amounts }}
    />
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  width: 60%;
  max-width: 340px;
  padding: 5px;
  border: 1px solid ${styles.blue};
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
  const { currentData } = useContext(BarChartContext)
  return useMemo(
    () => {
      if (currentData[0] === null) return <div />
      const firstData = currentData[0]
      const dateLabel =
        firstData !== null ? firstData.dateLabel : ''
      const amounts = currentData
        .map(data => {
          if (data === null) return '<span>--</span>'
          return `<span style="color: ${data.color}">${
            data.amount
          }</span>`
        })
        .join(' / ')
      return (
        <StyledView
          dateLabel={dateLabel}
          amounts={amounts}
          top={0}
          left={0}
        />
      )
    },
    [currentData]
  )
}
