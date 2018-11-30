import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Pagenate from '../../components/pagenate'
import PageFlipper from './pageFlipper'
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
        onChangePage={setCurrent}
      />
      <div className="pagenate">
        <Pagenate
          current={current}
          color="dark"
          count={Pages.length}
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
