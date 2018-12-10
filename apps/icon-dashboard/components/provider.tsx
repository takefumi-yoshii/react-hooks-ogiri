import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { DragDropContext } from './contexts'
import { Record } from './records'
import { useAppHome } from './hooks/useAppHome'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  verticalCount?: number
  holizontalCount?: number
  className?: string
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  const value = useAppHome({
    ref,
    records: props.records,
    verticalCount: props.verticalCount,
    holizontalCount: props.holizontalCount
  })
  return (
    <DragDropContext.Provider value={value}>
      <div className={props.className} ref={ref}>
        {props.children}
      </div>
    </DragDropContext.Provider>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`
