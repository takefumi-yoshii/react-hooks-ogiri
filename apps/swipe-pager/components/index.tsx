import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Indicate from '../../components/indicate'
import PageSwiper from './pageSwiper'
import Pages from './pages'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [current, setCurrent] = useState(0)
  return (
    <div className={props.className}>
      <PageSwiper
        pages={Pages}
        threshold={100}
        animationDuration={200}
        onChangePage={setCurrent}
      />
      <div className="indicate">
        <Indicate
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
  > .indicate {
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
