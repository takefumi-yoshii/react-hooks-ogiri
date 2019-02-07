import * as React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { PieChartContext } from '../contexts'
import { Record } from '../records'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  totalPoint: number
  rectSize: number
  progress: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <h2>{(props.totalPoint * props.progress) >> 0}</h2>
    {props.records.map((record, index) => (
      <p key={index} style={{ color: record.color }}>
        {record.name}：
        {(record.point * props.progress) >> 0}
      </p>
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.rectSize}px;
  height: ${props => props.rectSize}px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  pointer-events: none;
  user-select: none;
  > h2 {
    margin-top: 1.2rem;
    font-size: 3.2rem;
  }
  > p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    records,
    totalPoint,
    progress,
    rectSize
  } = useContext(PieChartContext)
  if (rectSize === 0) return <div />
  return (
    <StyledView
      records={records}
      totalPoint={totalPoint}
      rectSize={rectSize}
      progress={progress}
    />
  )
}
