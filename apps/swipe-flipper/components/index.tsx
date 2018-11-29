import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PageFlipper from './pageFlipper'
import Pagenate from './pagenate'
import Pages from './pages'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }

// ______________________________________________________
//
// @ View

const View = (props: Props) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className={props.className}>
      <PageFlipper
        pages={Pages}
        renderPrev={index => {
          const Component = Pages[index]
          return <Component />
        }}
        renderCurrent={index => {
          const Component = Pages[index]
          return <Component />
        }}
        renderNext={index => {
          const Component = Pages[index]
          return <Component />
        }}
        onChangePage={setCurrent}
      />
      <div className="pagenate">
        <Pagenate
          current={current}
          items={Pages.map((p, i) => i)}
        />
      </div>
    </div>
  )
}

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .pagenate {
    width: 100%;
    height: 30px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`
