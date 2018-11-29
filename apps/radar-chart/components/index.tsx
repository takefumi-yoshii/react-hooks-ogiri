import * as React from 'react'
import { useState, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { getRecords } from './records'
import { useProgress } from './useProgress'
import { useWindowResize } from './useWindowResize'
import Chart from './chart/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const ref = useRef({} as HTMLDivElement)
  const [resource] = useState(getRecords())
  const padding = useMemo(() => 60, [])
  const { progress } = useProgress()
  const { size } = useWindowResize(() => {
    if (ref.current === null) return 0
    const { width } = ref.current.getBoundingClientRect()
    return width - padding * 2
  })
  if (ref.current === null) return <div />
  return (
    <div className={props.className} ref={ref}>
      {size !== 0 && (
        <Chart
          records={resource.records}
          max={resource.max}
          size={size}
          padding={padding}
          progress={progress}
        />
      )}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
`
