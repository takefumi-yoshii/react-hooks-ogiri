import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { records } from './records'
import Items from './items/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const height = 60
const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLDivElement)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      if (ref.current === null) return
      const { width } = ref.current.getBoundingClientRect()
      setWidth(width)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className={props.className} ref={ref}>
      <Items
        records={records}
        top={0}
        left={0}
        itemWidth={width}
        itemHeight={height}
        containerWidth={width}
        containerHeight={height * records.length}
      />
    </div>
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
