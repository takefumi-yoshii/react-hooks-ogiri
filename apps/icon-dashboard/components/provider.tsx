import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { IconDashboardContext } from './contexts'
import { Record } from './records'
import { useIconDashboard } from './hooks/useIconDashboard'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  verticalCount?: number
  holizontalCount?: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  const value = useIconDashboard({
    ref,
    records: props.records,
    verticalCount: props.verticalCount,
    holizontalCount: props.holizontalCount
  })
  return (
    <IconDashboardContext.Provider value={value}>
      <div className={props.className} ref={ref}>
        {props.children}
      </div>
    </IconDashboardContext.Provider>
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
